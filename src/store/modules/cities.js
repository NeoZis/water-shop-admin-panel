import api from "@/service/api";

export default {
    state: {
        cities: [],
        editCity: null
    },
    mutations: {
        setCities(state, payload) {
            state.cities = payload
        },
        setEditCity(state, data) {
            state.editCity = data
        }
    },
    actions: {
        async getCities({commit}) {
            try {
                const {data} = await api.GET('test-json/cities.json')
                commit('setCities', data)
            } catch (e) {
                console.log(e);
            }
        },
        setEditCity({commit}, data) {
            commit('setEditCity', data)
        },
        async postNewCity({dispatch, commit}) {
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
        async putCity({dispatch, commit}) {
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
        async deleteCity({dispatch, commit}) {
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
    }
}
