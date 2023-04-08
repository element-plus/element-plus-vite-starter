<template>
  <div class="layout">
    <el-container>
      <el-header><h1>Quick Analysis Demo</h1></el-header>
      <el-main>
        <el-table :data="blahs" style="width: 100%" max-height="250">
          <el-table-column fixed prop="name" label="Name" width="150" :formatter="getNameString" />
          <el-table-column prop="sampleSize" label="Sample Size" />
          <el-table-column prop="conversionCount" label="Conversions" />
          <el-table-column
            prop="conversionRate"
            label="Conversion Rate"
            :formatter="getConversionRateString"
          />
          <el-table-column fixed="right" label="" width="80">
            <template #default="scope">
              <el-button
                link
                type="primary"
                size="small"
                @click.prevent="deleteInputRow(scope.$index)"
              >
                Remove
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-button class="mt-4" style="width: 100%" @click="showGenerateVariantDialog"
          >Generate New Data Sample</el-button
        >
        <el-alert
          v-if="!showResultsSection"
          title="Add at least two data variants to run a comparison"
          type="info"
          style="margin: 20px 0 0"
        />
      </el-main>
    </el-container>
    <el-container v-if="showResultsSection">
      <el-header><h1>Results</h1></el-header>
      <el-main>
        <el-alert
          class="var-count-alert"
          :show-icon="true"
          title="Currently this will compare only the first two variants"
          type="info"
        />
        <el-button type="primary" @click="triggerSubmitForAnalysis">Run Comparison</el-button>
        <AnalysisResult ref="analysisResultComponent" :variant-inputs="variantInputsFromBlahs" />
      </el-main>
    </el-container>
  </div>

  <!-- v-if guarantees form is destroyed so random values refresh -->
  <GenerateVariantDialog
    v-if="dialogFormVisible"
    v-model="dialogFormVisible"
    @submit="handleFormSubmit"
  ></GenerateVariantDialog>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import GenerateVariantDialog from '~/components/dialogs/GenerateVariantDialog.vue'
import type { FormValues } from '~/components/dialogs/GenerateVariantDialog.vue'

import AnalysisResult from '~/components/AnalysisResults.vue'

const dialogFormVisible = ref(false)
const showResultsSection = computed(() => blahs.value.length > 1)

const blahs = ref<FormValues[]>([])


const variantInputsFromBlahs = computed<VariantInput[]>(() => {
  return blahs.value.map((blah) => ({
    name: blah.name,
    isControl: blah.isControl,
    data: blah.binomialData
  }))
})

async function triggerSubmitForAnalysis() {
  console.log("submitted for analysis!")
}

function showGenerateVariantDialog() {
  dialogFormVisible.value = true
}

function handleFormSubmit(formValues: FormValues) {
  blahs.value.push(formValues)
  console.log(blahs)
}

function getConversionRateString(formValues: FormValues): string {
  let datum: number = formValues.conversionRate
  return datum.toPrecision(3)
}

function getNameString(formValues: FormValues): string {
  if (formValues.isControl) return `${formValues.name} (control)`
  return formValues.name
}

const deleteInputRow = (index: number) => {
  blahs.value.splice(index, 1)
}

</script>

<style>
.layout {
  text-align: center;
  margin: auto;
  width: 820px;
  padding: 10px;
}

.el-alert.var-count-alert,
.ep-alert.var-count-alert {
  /* not sure why this is called `ep-alert` */
  margin: 0 auto 20px auto;
  max-width: 450px;
}
</style>
