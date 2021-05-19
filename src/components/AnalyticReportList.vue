<template>
    <div>
        <h4>Analytic Page</h4>

        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="panel panel-primary">
                        <div class="panel-heading">
                            <h3 class="panel-title">Progress Reading</h3>
                        </div>
                        <div class="panel-body">
                            {{ report.countReading }}
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                     <div class="panel panel-primary">
                        <div class="panel-heading">
                            <h3 class="panel-title">Progress Programming</h3>
                        </div>
                        <div class="panel-body">
                            {{ report.countProgramming }}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="list">
            <ul class="list-group">
                <li class="list-group-item"
                    v-for="(data, index) in datas"
                    :key="index"
                >
                    {{ data.nama }}
                    <span class="badge badge-primary">{{ data.kategori }}</span>
                </li>
            </ul>
        </div>
    </div>
    
</template>

<script>
    import AnalyticReportService from "../services/AnalyticReportService";

    export default {
        name: "analytic-report-list",
        data() {
            return {
                datas: [],
                report: {
                    countProgramming: 0 ,
                    countReading: 0
                }
            }
        },
        methods: {
            retrieveAnalyticReportList() {
                AnalyticReportService.getAllReport()
                    .then(response => {
                        this.datas = response.data;
                        console.log(datas)
                    })
                    .catch(e => {
                        console.log(e)
                    })
            },
            retrieveAnalyticReportCount() {
                AnalyticReportService.getCountReport()
                    .then(response => {
                        this.report = response.data;
                        console.log(this.report)
                    })
                    .catch(e => {
                        console.log(e)
                    })
            }
        },
        mounted() {
            this.retrieveAnalyticReportList();
            this.retrieveAnalyticReportCount();
        }
    }
</script>