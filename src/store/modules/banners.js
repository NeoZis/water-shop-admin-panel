import api from "@/service/api";

export default {
    state: () => ({
        data: []
    }),
    mutations: {
        setBanners(state, data) {
            state.data = data
        }
    },
    actions: {
        async getBanners({commit, rootState}) {
            await api.GET('test-json/banners.json', rootState.token)
                .then(({data}) => commit('setBanners', data))
                .catch(err => console.log(err))
        },
        async deleteBanner({dispatch, commit}) {
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
        },
        async postBanner({dispatch, commit}) {
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
    getters: {}
}
