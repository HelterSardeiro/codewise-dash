import api from "services/api";

export class ReportApi {

    getReport = async (setReport, setLoading, setDataGraph, toggleModal) => {
        setLoading(true)

        try {
            const { data } = await api.get("performance-report/user")

            setReport(data)
            setDataGraph({
                labels: data.map(report => report.relatorioCarreira.habilidades[0].nome),
                datasets: [
                    {
                        label: 'Notas',
                        backgroundColor: 'rgba(75,192,192,0.4)',
                        borderColor: 'rgba(75,192,192,1)',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgba(75,192,192,0.6)',
                        hoverBorderColor: 'rgba(75,192,192,1)',
                        data: data.map(report => report.relatorioCarreira.habilidades[0].nota),
                    },
                ],
            })
            setLoading(false)
        } catch {
            setLoading(false)
            toggleModal()
        }
    }
}