<template>
  <section class="px-38 py-20">
    <div class="relative">
      <img src="@/assets/images/careers/sha1.png" alt="" srcset="" class="w-full relative z-10 h-auto">
      <img src="@/assets/images/careers/sha2.png" alt="" srcset=""
        class="w-[98%] h-auto absolute -bottom-6 left-1/2 -translate-x-1/2">
      <div class="absolute w-full h-full top-0 left-0 z-20 p-20 flex justify-between items-end">
        <div>
          <p class="text-[#9F8570] text-3xl mb-4">{{ jobDetail?.subtitle }}</p>
          <p class="text-[#072867] text-5xl font-bold">{{ jobDetail?.jobTitle }}</p>
        </div>
        <div>
          <p class="text-[#072867] text-2xl ">{{ t('pages.careersDetail.jobResponse') }} {{ jobDetail?.workPlace }}</p>
        </div>
      </div>
    </div>、
    <div class=" py-20">
      <div class="flex items-center gap-6 border-b border-[#072867] pl-4 pb-4 my-10 ">
        <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-10">
        <span class="text-[#072867] text-4xl font-bold">{{ t('pages.careersDetail.jobCondition') }}</span>
      </div>
      <div class="text-base md:text-xl leading-relaxed tracking-widest px-10">
        <div v-html="jobDetail?.jobResponse" class="job-responsibilities"></div>
      </div>
      <div class="flex items-center gap-6 border-b border-[#072867] pl-4 pb-4 my-10 ">
        <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-10">
        <span class="text-[#072867] text-4xl font-bold">{{ t('pages.careersDetail.applyWay') }}</span>
      </div>
      <div class="text-base md:text-xl leading-relaxed tracking-widest px-10">
        <div v-html="jobDetail?.jobCondition" class="job-responsibilities  job-condition"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { useCustomApiWithAutoRefresh } from '@/utils/useAutoRefreshApi'

import api from '@/utils/http'
const { t } = useI18n()
const route = useRoute()


interface JobDetail {
  id: string
  jobTitle: string
  jobResponse: string,
  jobCondition: string,
  applyWay: string,
  companyDescription: string,
  workPlace: string,
  subtitle: string,
  workPlaceRemark: string
}

// 获取职位详情
const { data: jobDetail } = useCustomApiWithAutoRefresh<JobDetail>(async () => {
  const jobCode = route.query.code as string
  if (!jobCode) {
    throw new Error('Job ID is required')
  }

  const res = await api.get({
    url: `/api/front/jobs/code`,
    params: {
      code: jobCode
    }
  })
  return res as JobDetail
})



</script>

<style scoped>
:deep(.job-responsibilities) {
  /* p {
    min-height: 1.6rem;
    line-height: 1.6rem !important;
  } */

  /* 专门处理空的p标签 */
  p:empty {
    min-height: 1.6rem;
  }
}
</style>