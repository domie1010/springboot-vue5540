<template>
    <div class="addEdit-block">
        <el-form
                class="detail-form-content"
                ref="ruleForm"
                :model="ruleForm"
                :rules="rules"
                label-width="auto"
                >
            <el-row>
                <el-col :span="12"  v-if="sessionTable !='chanpin'">
                    <el-form-item class="select" v-if="type!='info'"  label="产品" prop="chanpinId">
                        <el-select v-model="ruleForm.chanpinId" :disabled="ro.chanpinId" filterable placeholder="请选择产品" @change="chanpinChange">
                            <el-option
                                    v-for="(item,index) in chanpinOptions"
                                    v-bind:key="item.id"
                                    :label="item.chanpinName"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>

                <el-col :span="12"  v-if="sessionTable !='chanpin' ">
                    <el-form-item class="input" v-if="type!='info'"  label="产品名称" prop="chanpinName">
                        <el-input v-model="chanpinForm.chanpinName"
                                  placeholder="产品名称" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="产品名称" prop="chanpinName">
                            <el-input v-model="ruleForm.chanpinName"
                                      placeholder="产品名称" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='chanpin' ">
                    <el-form-item class="input" v-if="type!='info'"  label="产品编号" prop="chanpinUuidNumber">
                        <el-input v-model="chanpinForm.chanpinUuidNumber"
                                  placeholder="产品编号" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="产品编号" prop="chanpinUuidNumber">
                            <el-input v-model="ruleForm.chanpinUuidNumber"
                                      placeholder="产品编号" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12" v-if="sessionTable !='chanpin' ">
                    <el-form-item class="upload" v-if="type!='info' && !ro.chanpinPhoto" label="产品照片" prop="chanpinPhoto">
                        <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (chanpinForm.chanpinPhoto || '').split(',')" :src="$base.url+item" width="100" height="100">
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.chanpinPhoto" label="产品照片" prop="chanpinPhoto">
                            <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (ruleForm.chanpinPhoto || '').split(',')" :src="$base.url+item" width="100" height="100">
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='chanpin' ">
                    <el-form-item class="input" v-if="type!='info'"  label="单位" prop="chanpinDanwei">
                        <el-input v-model="chanpinForm.chanpinDanwei"
                                  placeholder="单位" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="单位" prop="chanpinDanwei">
                            <el-input v-model="ruleForm.chanpinDanwei"
                                      placeholder="单位" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='chanpin' ">
                    <el-form-item class="input" v-if="type!='info'"  label="产品类型" prop="chanpinValue">
                        <el-input v-model="chanpinForm.chanpinValue"
                                  placeholder="产品类型" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="产品类型" prop="chanpinValue">
                            <el-input v-model="ruleForm.chanpinValue"
                                      placeholder="产品类型" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='chanpin' ">
                    <el-form-item class="input" v-if="type!='info'"  label="产品原价" prop="chanpinOldMoney">
                        <el-input v-model="chanpinForm.chanpinOldMoney"
                                  placeholder="产品原价" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="产品原价" prop="chanpinOldMoney">
                            <el-input v-model="ruleForm.chanpinOldMoney"
                                      placeholder="产品原价" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='chanpin' ">
                    <el-form-item class="input" v-if="type!='info'"  label="所属仓库" prop="chanpinCangku">
                        <el-input v-model="chanpinForm.chanpinCangku"
                                  placeholder="所属仓库" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="所属仓库" prop="chanpinCangku">
                            <el-input v-model="ruleForm.chanpinCangku"
                                      placeholder="所属仓库" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='kehu'">
                    <el-form-item class="select" v-if="type!='info'"  label="客户" prop="kehuId">
                        <el-select v-model="ruleForm.kehuId" :disabled="ro.kehuId" filterable placeholder="请选择客户" @change="kehuChange">
                            <el-option
                                    v-for="(item,index) in kehuOptions"
                                    v-bind:key="item.id"
                                    :label="item.kehuName"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>

                <el-col :span="12"  v-if="sessionTable !='kehu' ">
                    <el-form-item class="input" v-if="type!='info'"  label="客户编号" prop="kehuUuidNumber">
                        <el-input v-model="kehuForm.kehuUuidNumber"
                                  placeholder="客户编号" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="客户编号" prop="kehuUuidNumber">
                            <el-input v-model="ruleForm.kehuUuidNumber"
                                      placeholder="客户编号" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='kehu' ">
                    <el-form-item class="input" v-if="type!='info'"  label="客户姓名" prop="kehuName">
                        <el-input v-model="kehuForm.kehuName"
                                  placeholder="客户姓名" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="客户姓名" prop="kehuName">
                            <el-input v-model="ruleForm.kehuName"
                                      placeholder="客户姓名" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='kehu' ">
                    <el-form-item class="input" v-if="type!='info'"  label="客户手机号" prop="kehuPhone">
                        <el-input v-model="kehuForm.kehuPhone"
                                  placeholder="客户手机号" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="客户手机号" prop="kehuPhone">
                            <el-input v-model="ruleForm.kehuPhone"
                                      placeholder="客户手机号" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='kehu' ">
                    <el-form-item class="input" v-if="type!='info'"  label="客户身份证号" prop="kehuIdNumber">
                        <el-input v-model="kehuForm.kehuIdNumber"
                                  placeholder="客户身份证号" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="客户身份证号" prop="kehuIdNumber">
                            <el-input v-model="ruleForm.kehuIdNumber"
                                      placeholder="客户身份证号" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12" v-if="sessionTable !='kehu' ">
                    <el-form-item class="upload" v-if="type!='info' && !ro.kehuPhoto" label="客户照片" prop="kehuPhoto">
                        <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (kehuForm.kehuPhoto || '').split(',')" :src="$base.url+item" width="100" height="100">
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.kehuPhoto" label="客户照片" prop="kehuPhoto">
                            <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (ruleForm.kehuPhoto || '').split(',')" :src="$base.url+item" width="100" height="100">
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='kehu' ">
                    <el-form-item class="input" v-if="type!='info'"  label="性别" prop="sexValue">
                        <el-input v-model="kehuForm.sexValue"
                                  placeholder="性别" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="性别" prop="sexValue">
                            <el-input v-model="ruleForm.sexValue"
                                      placeholder="性别" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='kehu' ">
                    <el-form-item class="input" v-if="type!='info'"  label="客户邮箱" prop="kehuEmail">
                        <el-input v-model="kehuForm.kehuEmail"
                                  placeholder="客户邮箱" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="客户邮箱" prop="kehuEmail">
                            <el-input v-model="ruleForm.kehuEmail"
                                      placeholder="客户邮箱" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='kehu' ">
                    <el-form-item class="input" v-if="type!='info'"  label="住址" prop="kehuAddress">
                        <el-input v-model="kehuForm.kehuAddress"
                                  placeholder="住址" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="住址" prop="kehuAddress">
                            <el-input v-model="ruleForm.kehuAddress"
                                      placeholder="住址" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='kehu' ">
                    <el-form-item class="input" v-if="type!='info'"  label="行业" prop="hangyeValue">
                        <el-input v-model="kehuForm.hangyeValue"
                                  placeholder="行业" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="行业" prop="hangyeValue">
                            <el-input v-model="ruleForm.hangyeValue"
                                      placeholder="行业" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='kehu' ">
                    <el-form-item class="input" v-if="type!='info'"  label="职位" prop="zhiweiValue">
                        <el-input v-model="kehuForm.zhiweiValue"
                                  placeholder="职位" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="职位" prop="zhiweiValue">
                            <el-input v-model="ruleForm.zhiweiValue"
                                      placeholder="职位" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='kehu' ">
                    <el-form-item class="input" v-if="type!='info'"  label="地区" prop="diquValue">
                        <el-input v-model="kehuForm.diquValue"
                                  placeholder="地区" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="地区" prop="diquValue">
                            <el-input v-model="ruleForm.diquValue"
                                      placeholder="地区" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='yuangong'">
                    <el-form-item class="select" v-if="type!='info'"  label="员工" prop="yuangongId">
                        <el-select v-model="ruleForm.yuangongId" :disabled="ro.yuangongId" filterable placeholder="请选择员工" @change="yuangongChange">
                            <el-option
                                    v-for="(item,index) in yuangongOptions"
                                    v-bind:key="item.id"
                                    :label="item.yuangongName"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>

                <el-col :span="12"  v-if="sessionTable !='yuangong' ">
                    <el-form-item class="input" v-if="type!='info'"  label="员工编号" prop="yuangongUuidNumber">
                        <el-input v-model="yuangongForm.yuangongUuidNumber"
                                  placeholder="员工编号" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="员工编号" prop="yuangongUuidNumber">
                            <el-input v-model="ruleForm.yuangongUuidNumber"
                                      placeholder="员工编号" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='yuangong' ">
                    <el-form-item class="input" v-if="type!='info'"  label="员工姓名" prop="yuangongName">
                        <el-input v-model="yuangongForm.yuangongName"
                                  placeholder="员工姓名" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="员工姓名" prop="yuangongName">
                            <el-input v-model="ruleForm.yuangongName"
                                      placeholder="员工姓名" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='yuangong' ">
                    <el-form-item class="input" v-if="type!='info'"  label="员工手机号" prop="yuangongPhone">
                        <el-input v-model="yuangongForm.yuangongPhone"
                                  placeholder="员工手机号" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="员工手机号" prop="yuangongPhone">
                            <el-input v-model="ruleForm.yuangongPhone"
                                      placeholder="员工手机号" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='yuangong' ">
                    <el-form-item class="input" v-if="type!='info'"  label="员工身份证号" prop="yuangongIdNumber">
                        <el-input v-model="yuangongForm.yuangongIdNumber"
                                  placeholder="员工身份证号" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="员工身份证号" prop="yuangongIdNumber">
                            <el-input v-model="ruleForm.yuangongIdNumber"
                                      placeholder="员工身份证号" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12" v-if="sessionTable !='yuangong' ">
                    <el-form-item class="upload" v-if="type!='info' && !ro.yuangongPhoto" label="员工头像" prop="yuangongPhoto">
                        <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (yuangongForm.yuangongPhoto || '').split(',')" :src="$base.url+item" width="100" height="100">
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.yuangongPhoto" label="员工头像" prop="yuangongPhoto">
                            <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (ruleForm.yuangongPhoto || '').split(',')" :src="$base.url+item" width="100" height="100">
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='yuangong' ">
                    <el-form-item class="input" v-if="type!='info'"  label="员工邮箱" prop="yuangongEmail">
                        <el-input v-model="yuangongForm.yuangongEmail"
                                  placeholder="员工邮箱" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="员工邮箱" prop="yuangongEmail">
                            <el-input v-model="ruleForm.yuangongEmail"
                                      placeholder="员工邮箱" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='yuangong' ">
                    <el-form-item class="input" v-if="type!='info'"  label="账户状态" prop="jinyongValue">
                        <el-input v-model="yuangongForm.jinyongValue"
                                  placeholder="账户状态" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="账户状态" prop="jinyongValue">
                            <el-input v-model="ruleForm.jinyongValue"
                                      placeholder="账户状态" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <input id="updateId" name="id" type="hidden">
            <input id="yuangongId" name="yuangongId" type="hidden">
            <input id="chanpinId" name="chanpinId" type="hidden">
            <input id="kehuId" name="kehuId" type="hidden">
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="销售编号" prop="chanpinDingdanUuidNumber">
                       <el-input v-model="ruleForm.chanpinDingdanUuidNumber"
                                 placeholder="销售编号" clearable  :readonly="ro.chanpinDingdanUuidNumber"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="销售编号" prop="chanpinDingdanUuidNumber">
                           <el-input v-model="ruleForm.chanpinDingdanUuidNumber"
                                     placeholder="销售编号" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
                <el-col :span="12">
                    <el-form-item class="select" v-if="type!='info'"  label="销售类型" prop="chanpinDingdanXiaoshouTypes">
                        <el-select v-model="ruleForm.chanpinDingdanXiaoshouTypes" :disabled="ro.chanpinDingdanXiaoshouTypes" placeholder="请选择销售类型">
                            <el-option
                                v-for="(item,index) in chanpinDingdanXiaoshouTypesOptions"
                                v-bind:key="item.codeIndex"
                                :label="item.indexName"
                                :value="item.codeIndex">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="销售类型" prop="chanpinDingdanXiaoshouValue">
                        <el-input v-model="ruleForm.chanpinDingdanXiaoshouValue"
                            placeholder="销售类型" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12">
                    <el-form-item class="select" v-if="type!='info'"  label="销售方式" prop="chanpinDingdanXiaoshoufangshiTypes">
                        <el-select v-model="ruleForm.chanpinDingdanXiaoshoufangshiTypes" :disabled="ro.chanpinDingdanXiaoshoufangshiTypes" placeholder="请选择销售方式">
                            <el-option
                                v-for="(item,index) in chanpinDingdanXiaoshoufangshiTypesOptions"
                                v-bind:key="item.codeIndex"
                                :label="item.indexName"
                                :value="item.codeIndex">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="销售方式" prop="chanpinDingdanXiaoshoufangshiValue">
                        <el-input v-model="ruleForm.chanpinDingdanXiaoshoufangshiValue"
                            placeholder="销售方式" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="快递公司" prop="chanpinDingdanKuaidigongsi">
                       <el-input v-model="ruleForm.chanpinDingdanKuaidigongsi"
                                 placeholder="快递公司" clearable  :readonly="ro.chanpinDingdanKuaidigongsi"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="快递公司" prop="chanpinDingdanKuaidigongsi">
                           <el-input v-model="ruleForm.chanpinDingdanKuaidigongsi"
                                     placeholder="快递公司" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="快递单号" prop="chanpinDingdanDanhao">
                       <el-input v-model="ruleForm.chanpinDingdanDanhao"
                                 placeholder="快递单号" clearable  :readonly="ro.chanpinDingdanDanhao"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="快递单号" prop="chanpinDingdanDanhao">
                           <el-input v-model="ruleForm.chanpinDingdanDanhao"
                                     placeholder="快递单号" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="销售数量" prop="chanpinDingdanNumber">
                       <el-input v-model="ruleForm.chanpinDingdanNumber"
                                 placeholder="销售数量" clearable  :readonly="ro.chanpinDingdanNumber"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="销售数量" prop="chanpinDingdanNumber">
                           <el-input v-model="ruleForm.chanpinDingdanNumber"
                                     placeholder="销售数量" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="销售金额" prop="chanpinDingdanJine">
                       <el-input v-model="ruleForm.chanpinDingdanJine"
                                 placeholder="销售金额" clearable  :readonly="ro.chanpinDingdanJine"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="销售金额" prop="chanpinDingdanJine">
                           <el-input v-model="ruleForm.chanpinDingdanJine"
                                     placeholder="销售金额" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
                <el-col :span="12">
                    <el-form-item v-if="type!='info' && !ro.chanpinDingdanTime"  class="input" label="销售时间" prop="chanpinDingdanTime">
                        <el-date-picker
                                value-format="yyyy-MM-dd HH:mm:ss"
                                v-model="ruleForm.chanpinDingdanTime"
                                type="datetime"
                                placeholder="销售时间"
                                :disabled="ro.chanpinDingdanTime">
                        </el-date-picker>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.chanpinDingdanTime" label="销售时间" prop="chanpinDingdanTime">
                            <span v-html="ruleForm.chanpinDingdanTime"></span>
                        </el-form-item>
                    </div>
                </el-col>

                <el-col :span="12">
                    <el-form-item class="select" v-if="type!='info'"  label="销售状态" prop="chanpinDingdanTypes">
                        <el-select v-model="ruleForm.chanpinDingdanTypes" :disabled="ro.chanpinDingdanTypes" placeholder="请选择销售状态">
                            <el-option
                                v-for="(item,index) in chanpinDingdanTypesOptions"
                                v-bind:key="item.codeIndex"
                                :label="item.indexName"
                                :value="item.codeIndex">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="销售状态" prop="chanpinDingdanValue">
                        <el-input v-model="ruleForm.chanpinDingdanValue"
                            placeholder="销售状态" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="24">
                    <el-form-item v-if="type!='info' && !ro.chanpinDingdanContent"  label="销售备注" prop="chanpinDingdanContent">
                        <editor style="min-width: 200px; max-width: 600px;"
                                v-model="ruleForm.chanpinDingdanContent"
                                class="editor"
                                action="file/upload">
                        </editor>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.chanpinDingdanContent" label="销售备注" prop="chanpinDingdanContent">
                            <span v-html="ruleForm.chanpinDingdanContent"></span>
                        </el-form-item>
                    </div>
                </el-col>
            </el-row>
            <el-form-item class="btn">
                <el-button v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
                <el-button v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
                <el-button v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import styleJs from "../../../utils/style.js";
    // 数字，邮件，手机，url，身份证校验
    import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
    import utilsJs, {getYearFormat,getMonthFormat,getDateFormat,getDatetimeFormat} from "../../../utils/utils.js";
    export default {
        data() {
            return {
                addEditForm:null,
                id: '',
                type: '',
                sessionTable : "",//登录账户所在表名
                role : "",//权限
                userId:"",//当前登录人的id
                chanpinForm: {},
                kehuForm: {},
                yuangongForm: {},
                ro:{
                    yuangongId: false,
                    chanpinId: false,
                    kehuId: false,
                    chanpinDingdanUuidNumber: true,
                    chanpinDingdanXiaoshouTypes: false,
                    chanpinDingdanXiaoshoufangshiTypes: false,
                    chanpinDingdanKuaidigongsi: false,
                    chanpinDingdanDanhao: false,
                    chanpinDingdanNumber: false,
                    chanpinDingdanJine: false,
                    chanpinDingdanTime: false,
                    chanpinDingdanTypes: false,
                    chanpinDingdanContent: false,
                    insertTime: false,
                },
                ruleForm: {
                    yuangongId: '',
                    chanpinId: '',
                    kehuId: '',
                    chanpinDingdanUuidNumber: new Date().getTime(),
                    chanpinDingdanXiaoshouTypes: '',
                    chanpinDingdanXiaoshoufangshiTypes: '',
                    chanpinDingdanKuaidigongsi: '',
                    chanpinDingdanDanhao: '',
                    chanpinDingdanNumber: '',
                    chanpinDingdanJine: '',
                    chanpinDingdanTime: '',
                    chanpinDingdanTypes: '',
                    chanpinDingdanContent: '',
                    insertTime: '',
                },
                chanpinDingdanXiaoshouTypesOptions : [],
                chanpinDingdanXiaoshoufangshiTypesOptions : [],
                chanpinDingdanTypesOptions : [],
                chanpinOptions : [],
                kehuOptions : [],
                yuangongOptions : [],
                rules: {
                   yuangongId: [
                              { required: true, message: '员工不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   chanpinId: [
                              { required: true, message: '产品不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   kehuId: [
                              { required: true, message: '客户不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   chanpinDingdanUuidNumber: [
                              { required: true, message: '销售编号不能为空', trigger: 'blur' },
                          ],
                   chanpinDingdanXiaoshouTypes: [
                              { required: true, message: '销售类型不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   chanpinDingdanXiaoshoufangshiTypes: [
                              { required: true, message: '销售方式不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   chanpinDingdanKuaidigongsi: [
                              { required: true, message: '快递公司不能为空', trigger: 'blur' },
                          ],
                   chanpinDingdanDanhao: [
                              { required: true, message: '快递单号不能为空', trigger: 'blur' },
                          ],
                   chanpinDingdanNumber: [
                              { required: true, message: '销售数量不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   chanpinDingdanJine: [
                              { required: true, message: '销售金额不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]{0,6}(\.[0-9]{1,2})?$/,
                                  message: '只允许输入整数6位,小数2位的数字',
                                  trigger: 'blur'
                              }
                          ],
                   chanpinDingdanTime: [
                              { required: true, message: '销售时间不能为空', trigger: 'blur' },
                          ],
                   chanpinDingdanTypes: [
                              { required: true, message: '销售状态不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   chanpinDingdanContent: [
                              { required: true, message: '销售备注不能为空', trigger: 'blur' },
                          ],
                   insertTime: [
                              { required: true, message: '录入时间不能为空', trigger: 'blur' },
                          ],
                }
            };
        },
        props: ["parent"],
        computed: {
        },
        created() {
            //获取当前登录用户的信息
            this.sessionTable = this.$storage.get("sessionTable");
            this.role = this.$storage.get("role");
            this.userId = this.$storage.get("userId");


            if (this.role != "管理员"){
            }else{
            }
            this.addEditForm = styleJs.addStyle();
            this.addEditStyleChange()
            this.addEditUploadStyleChange()
            //获取下拉框信息
                this.$http({
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=chanpin_dingdan_xiaoshou_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.chanpinDingdanXiaoshouTypesOptions = data.data.list;
                    }
                });
                this.$http({
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=chanpin_dingdan_xiaoshoufangshi_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.chanpinDingdanXiaoshoufangshiTypesOptions = data.data.list;
                    }
                });
                this.$http({
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=chanpin_dingdan_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.chanpinDingdanTypesOptions = data.data.list;
                    }
                });

         this.$http({
             url: `chanpin/page?page=1&limit=100`,
             method: "get"
         }).then(({ data }) => {
             if (data && data.code === 0) {
                this.chanpinOptions = data.data.list;
            }
         });
         this.$http({
             url: `kehu/page?page=1&limit=100`,
             method: "get"
         }).then(({ data }) => {
             if (data && data.code === 0) {
                this.kehuOptions = data.data.list;
            }
         });
         this.$http({
             url: `yuangong/page?page=1&limit=100`,
             method: "get"
         }).then(({ data }) => {
             if (data && data.code === 0) {
                this.yuangongOptions = data.data.list;
            }
         });

        },
        mounted() {
        },
        methods: {
            // 下载
            download(file){
                window.open(`${file}`)
            },
            // 初始化
            init(id,type) {
                if (id) {
                    this.id = id;
                    this.type = type;
                }
                if(this.type=='info'||this.type=='else'){
                    this.info(id);
                }
                // 获取用户信息
                this.$http({
                    url:`${this.$storage.get("sessionTable")}/session`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        var json = data.data;
                    } else {
                        this.$message.error(data.msg);
                    }
                });
            },
            chanpinChange(id){
                this.$http({
                    url: `chanpin/info/`+id,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.chanpinForm = data.data;
                    }
                });
            },
            kehuChange(id){
                this.$http({
                    url: `kehu/info/`+id,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.kehuForm = data.data;
                    }
                });
            },
            yuangongChange(id){
                this.$http({
                    url: `yuangong/info/`+id,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.yuangongForm = data.data;
                    }
                });
            },
            // 多级联动参数
            info(id) {
                let _this =this;
                _this.$http({
                    url: `chanpinDingdan/info/${id}`,
                    method: 'get'
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        _this.ruleForm = data.data;
                        _this.chanpinChange(data.data.chanpinId)
                        _this.kehuChange(data.data.kehuId)
                        _this.yuangongChange(data.data.yuangongId)
                        _this.ruleForm.chanpinDingdanContent = _this.ruleForm.chanpinDingdanContent.replaceAll("src=\"upload/","src=\""+this.$base.url+"upload/");
                    } else {
                        _this.$message.error(data.msg);
                    }
                });
            },
            // 提交
            onSubmit() {
                this.$refs["ruleForm"].validate(valid => {
                    if (valid) {
                        this.ruleForm.chanpinDingdanContent = this.ruleForm.chanpinDingdanContent.replaceAll(this.$base.url,"");
                        this.$http({
                            url:`chanpinDingdan/${!this.ruleForm.id ? "save" : "update"}`,
                            method: "post",
                            data: this.ruleForm
                        }).then(({ data }) => {
                            if (data && data.code === 0) {
                                this.$message({
                                    message: "操作成功",
                                    type: "success",
                                    duration: 1500,
                                    onClose: () => {
                                        this.parent.showFlag = true;
                                        this.parent.addOrUpdateFlag = false;
                                        this.parent.chanpinDingdanCrossAddOrUpdateFlag = false;
                                        this.parent.search();
                                        this.parent.contentStyleChange();
                                    }
                                });
                            } else {
                                this.$message.error(data.msg);
                            }
                        });
                    }
                });
            },
            // 获取uuid
            getUUID () {
                return new Date().getTime();
            },
            // 返回
            back() {
                this.parent.showFlag = true;
                this.parent.addOrUpdateFlag = false;
                this.parent.chanpinDingdanCrossAddOrUpdateFlag = false;
                this.parent.contentStyleChange();
            },
            //图片

            addEditStyleChange() {
                this.$nextTick(()=>{
                    // input
                    document.querySelectorAll('.addEdit-block .input .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.inputHeight
                        el.style.color = this.addEditForm.inputFontColor
                        el.style.fontSize = this.addEditForm.inputFontSize
                        el.style.borderWidth = this.addEditForm.inputBorderWidth
                        el.style.borderStyle = this.addEditForm.inputBorderStyle
                        el.style.borderColor = this.addEditForm.inputBorderColor
                        el.style.borderRadius = this.addEditForm.inputBorderRadius
                        el.style.backgroundColor = this.addEditForm.inputBgColor
                    })
                    document.querySelectorAll('.addEdit-block .input .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.inputHeight
                        el.style.color = this.addEditForm.inputLableColor
                        el.style.fontSize = this.addEditForm.inputLableFontSize
                    })
                    // select
                    document.querySelectorAll('.addEdit-block .select .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.selectHeight
                        el.style.color = this.addEditForm.selectFontColor
                        el.style.fontSize = this.addEditForm.selectFontSize
                        el.style.borderWidth = this.addEditForm.selectBorderWidth
                        el.style.borderStyle = this.addEditForm.selectBorderStyle
                        el.style.borderColor = this.addEditForm.selectBorderColor
                        el.style.borderRadius = this.addEditForm.selectBorderRadius
                        el.style.backgroundColor = this.addEditForm.selectBgColor
                    })
                    document.querySelectorAll('.addEdit-block .select .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.selectHeight
                        el.style.color = this.addEditForm.selectLableColor
                        el.style.fontSize = this.addEditForm.selectLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .select .el-select__caret').forEach(el=>{
                        el.style.color = this.addEditForm.selectIconFontColor
                        el.style.fontSize = this.addEditForm.selectIconFontSize
                    })
                    // date
                    document.querySelectorAll('.addEdit-block .date .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.dateHeight
                        el.style.color = this.addEditForm.dateFontColor
                        el.style.fontSize = this.addEditForm.dateFontSize
                        el.style.borderWidth = this.addEditForm.dateBorderWidth
                        el.style.borderStyle = this.addEditForm.dateBorderStyle
                        el.style.borderColor = this.addEditForm.dateBorderColor
                        el.style.borderRadius = this.addEditForm.dateBorderRadius
                        el.style.backgroundColor = this.addEditForm.dateBgColor
                    })
                    document.querySelectorAll('.addEdit-block .date .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.dateHeight
                        el.style.color = this.addEditForm.dateLableColor
                        el.style.fontSize = this.addEditForm.dateLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .date .el-input__icon').forEach(el=>{
                        el.style.color = this.addEditForm.dateIconFontColor
                        el.style.fontSize = this.addEditForm.dateIconFontSize
                        el.style.lineHeight = this.addEditForm.dateHeight
                    })
                    // upload
                    let iconLineHeight = parseInt(this.addEditForm.uploadHeight) - parseInt(this.addEditForm.uploadBorderWidth) * 2 + 'px'
                    document.querySelectorAll('.addEdit-block .upload .el-upload--picture-card').forEach(el=>{
                        el.style.width = this.addEditForm.uploadHeight
                        el.style.height = this.addEditForm.uploadHeight
                        el.style.borderWidth = this.addEditForm.uploadBorderWidth
                        el.style.borderStyle = this.addEditForm.uploadBorderStyle
                        el.style.borderColor = this.addEditForm.uploadBorderColor
                        el.style.borderRadius = this.addEditForm.uploadBorderRadius
                        el.style.backgroundColor = this.addEditForm.uploadBgColor
                    })
                    document.querySelectorAll('.addEdit-block .upload .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.uploadHeight
                        el.style.color = this.addEditForm.uploadLableColor
                        el.style.fontSize = this.addEditForm.uploadLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .upload .el-icon-plus').forEach(el=>{
                        el.style.color = this.addEditForm.uploadIconFontColor
                        el.style.fontSize = this.addEditForm.uploadIconFontSize
                        el.style.lineHeight = iconLineHeight
                        el.style.display = 'block'
                    })
                    // 多文本输入框
                    document.querySelectorAll('.addEdit-block .textarea .el-textarea__inner').forEach(el=>{
                        el.style.height = this.addEditForm.textareaHeight
                        el.style.color = this.addEditForm.textareaFontColor
                        el.style.fontSize = this.addEditForm.textareaFontSize
                        el.style.borderWidth = this.addEditForm.textareaBorderWidth
                        el.style.borderStyle = this.addEditForm.textareaBorderStyle
                        el.style.borderColor = this.addEditForm.textareaBorderColor
                        el.style.borderRadius = this.addEditForm.textareaBorderRadius
                        el.style.backgroundColor = this.addEditForm.textareaBgColor
                    })
                    document.querySelectorAll('.addEdit-block .textarea .el-form-item__label').forEach(el=>{
                        // el.style.lineHeight = this.addEditForm.textareaHeight
                        el.style.color = this.addEditForm.textareaLableColor
                        el.style.fontSize = this.addEditForm.textareaLableFontSize
                    })
                    // 保存
                    document.querySelectorAll('.addEdit-block .btn .btn-success').forEach(el=>{
                        el.style.width = this.addEditForm.btnSaveWidth
                        el.style.height = this.addEditForm.btnSaveHeight
                        el.style.color = this.addEditForm.btnSaveFontColor
                        el.style.fontSize = this.addEditForm.btnSaveFontSize
                        el.style.borderWidth = this.addEditForm.btnSaveBorderWidth
                        el.style.borderStyle = this.addEditForm.btnSaveBorderStyle
                        el.style.borderColor = this.addEditForm.btnSaveBorderColor
                        el.style.borderRadius = this.addEditForm.btnSaveBorderRadius
                        el.style.backgroundColor = this.addEditForm.btnSaveBgColor
                    })
                    // 返回
                    document.querySelectorAll('.addEdit-block .btn .btn-close').forEach(el=>{
                        el.style.width = this.addEditForm.btnCancelWidth
                        el.style.height = this.addEditForm.btnCancelHeight
                        el.style.color = this.addEditForm.btnCancelFontColor
                        el.style.fontSize = this.addEditForm.btnCancelFontSize
                        el.style.borderWidth = this.addEditForm.btnCancelBorderWidth
                        el.style.borderStyle = this.addEditForm.btnCancelBorderStyle
                        el.style.borderColor = this.addEditForm.btnCancelBorderColor
                        el.style.borderRadius = this.addEditForm.btnCancelBorderRadius
                        el.style.backgroundColor = this.addEditForm.btnCancelBgColor
                    })
                })
            },
            addEditUploadStyleChange() {
                this.$nextTick(()=>{
                    document.querySelectorAll('.addEdit-block .upload .el-upload-list--picture-card .el-upload-list__item').forEach(el=>{
                        el.style.width = this.addEditForm.uploadHeight
                        el.style.height = this.addEditForm.uploadHeight
                        el.style.borderWidth = this.addEditForm.uploadBorderWidth
                        el.style.borderStyle = this.addEditForm.uploadBorderStyle
                        el.style.borderColor = this.addEditForm.uploadBorderColor
                        el.style.borderRadius = this.addEditForm.uploadBorderRadius
                        el.style.backgroundColor = this.addEditForm.uploadBgColor
                    })
                })
            },
        }
    };
</script>
<style lang="scss">
.editor{
  height: 500px;

  & /deep/ .ql-container {
	  height: 310px;
  }
}
.amap-wrapper {
  width: 100%;
  height: 500px;
}
.search-box {
  position: absolute;
}
.addEdit-block {
	margin: -10px;
}
.detail-form-content {
	padding: 12px;
}
.btn .el-button {
  padding: 0;
}</style>

