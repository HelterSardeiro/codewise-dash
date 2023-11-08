import api from "services/api";

export class ActivityApi {

    getActivitys = async (setActivity) => {
        try {
            const { data } = await api.get("activity/user/getActivity")
            setActivity(data)
        } catch {
            alert("Erro ao listar atividades")
        }
    }

    createActivitys = async (activity) => {
        try {
            await api.post("activity", activity)
            alert("Atividade criada com sucesso")
        } catch {
            alert("Erro ao listar atividades")
        }
    }
}