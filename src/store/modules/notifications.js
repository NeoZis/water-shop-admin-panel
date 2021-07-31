import api from "@/service/api";

export default {
    state: () => ({
        notifications: []
    }),
    mutations: {
        setNotifications(state, data) {
            state.notifications = data
        }
    },
    actions: {
        async getNotifications({commit, rootState}) {
            await api.GET('test-json/notifications.json', rootState.token)
                .then(({data}) => {
                    commit('setNotifications', data)
                })
                .catch(console.dir)
        },
        async postNewNotification({dispatch, commit}) {
            commit('setLoading')
            const request = new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 2000);
            });
            try {
                await request
                dispatch('setSuccessMessage')
            } catch {
                dispatch('setErrorMessage')
            } finally {
                commit('unsetLoading')
            }
        }
    },
    getters: {
        getNotifications(state) {
            return state.notifications.map(el => {
                let {postedTime, body} = el
                postedTime = new Date(`${postedTime}Z`)
                postedTime = new Intl.DateTimeFormat('en-GB', {
                    year: 'numeric', month: 'numeric', day: 'numeric',
                    hour: 'numeric', minute: 'numeric', hour12: true
                }).format(postedTime).toUpperCase()
                return {postedTime, body}
            })
        }
    }
}
