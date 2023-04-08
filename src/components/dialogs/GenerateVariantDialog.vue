<template>
  <el-dialog v-model="dialogVisible" title="Generate Random Sample">
    <el-form :model="formValues" label-position="right" label-width="auto">
      <el-form-item label="Variant Name">
        <el-input v-model="formValues.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Sample Size">
        <el-input-number
          size="small"
          v-model="formValues.sampleSize"
          :min="100"
          :step="1000"
          controls-position="right"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="Conversion Rate">
        <el-input-number
          size="small"
          v-model="formValues.conversionRate"
          :min="0"
          :max="1"
          :step="0.01"
          :precision="3"
          controls-position="right"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="Control Variant">
        <el-switch v-model="formValues.isControl" />
      </el-form-item>
      <el-form-item label="Binomial Data">
        <el-button plain @click="rollNewBinomialArray" type="primary"> Generate Sample </el-button>
        <el-input
          :disabled="true"
          type="textarea"
          placeholder="< Generated binomial data >"
          v-model="formValues.binomialDataCommaSeparated"
          rows="4"
        ></el-input>
        <p v-if="isBinomalDataGenerated" style="margin-bottom: 0">
          Conversion rate of sample: {{ conversionRateOfSampleString }}
        </p>
      </el-form-item>
    </el-form>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="closeDialog">Cancel</el-button>
        <el-button type="primary" @click="submitForm" :disabled="!isFormComplete"
          >Confirm</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { generateBinomialArray } from '~/utils/GenerateSamples'
import { randomBetween, randomIntBetween } from '~/utils/Helpers'
import { ref, computed } from 'vue'

export type FormValues = {
  name: string
  sampleSize: number
  conversionCount: number | null
  conversionRate: number
  isControl: boolean
  binomialData: number[]
  binomialDataCommaSeparated: string
}

const formValues = ref<FormValues>({
  name: '',
  sampleSize: randomIntBetween(18, 34) * 1000,
  conversionRate: randomBetween(0.23, 0.29),
  conversionCount: null,
  isControl: false,
  binomialData: [],
  binomialDataCommaSeparated: ''
})

const isFormComplete = computed(() => {
  if (!formValues.value.name) return false
  if (!formValues.value.binomialDataCommaSeparated) return false
  if (formValues.value.binomialData.length === 0) return false
  return true
})

const props = defineProps({
  modelValue: Boolean
})

const emit = defineEmits(['update:modelValue', 'submit'])

const dialogVisible = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

const isBinomalDataGenerated = computed(() => formValues.value.binomialData.length !== 0)
const conversionRateOfSampleString = computed(() => {
  if (!isBinomalDataGenerated.value) return ''
  let dataum =
    formValues.value.binomialData.reduce((partialSum, a) => partialSum + a, 0) /
    formValues.value.binomialData.length
  return `${dataum.toPrecision(3)}`
})

function closeDialog() {
  emit('update:modelValue', false)
}

function submitForm() {
  emit('submit', formValues.value)
  closeDialog()
}

function rollNewBinomialArray() {
  // I don't think i want to overload this UI to allow the user to modify textarea
  const newBinomalArray = generateBinomialArray(
    formValues.value.sampleSize,
    formValues.value.conversionRate
  )
  formValues.value.binomialData = newBinomalArray
  formValues.value.binomialDataCommaSeparated = newBinomalArray.join(', ')
  formValues.value.conversionCount = newBinomalArray.reduce((partialSum, a) => partialSum + a, 0)
}
</script>

<style scoped>
.el-select {
  width: 300px;
}
.el-input {
  width: 300px;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}

.ep-textarea * {
  width: 100%;
  height: 91px;
  /* padding: 10px; */
  box-sizing: border-box;
  /* border: 1px solid var(--color-border);
  color: var(--color-text);
  border-radius: 6px;
  background-color: var(--color-background); */
  resize: none;
  overflow: auto;
  white-space: pre-wrap;
}
</style>
