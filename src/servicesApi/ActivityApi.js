import api from "services/api";

export class ActivityApi {

    getActivitys = async (setActivity) => {
        try {
            const { data } = await api.get("activity/user/getActivity")
            if(data.length > 0) {
                setActivity(data)
            }
        } catch {
            alert("Erro ao listar atividades")
        }
    }

    getAnalysis = async (id, setAnalysis, setLoading) => {
        setLoading(true)
        try {
            const { data } = await api.get(`activity/user/analyzecode/${id}`)

            setAnalysis(data)
        } catch {
            alert("Erro ao gerar analise")
        }
        setLoading(false)
    }

    createActivitys = async (activity) => {
        try {
            await api.post("activity", activity)
            alert("Atividade criada com sucesso")
        } catch {
            alert("Erro criar atividade")
        }
    }
}