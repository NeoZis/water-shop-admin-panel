import api from "@/service/api";

export default {
    state: () => ({
        data: [],
        currentDriver: null
    }),
    mutations: {
        setDrivers(state, data) {
            state.data = data
        },
        setCurrentDriver(state, data) {
            state.currentDriver = data
        }
    },
    actions: {
        async getDrivers({commit, rootState}) {
            await api.GET('test-json/drivers.json', rootState.token)
                .then(({data}) => commit('setDrivers', data))
                .catch(err => console.log(err))
        },
        setCurrentDriver({commit, state}, id = null) {
            if (id === null) commit('setCurrentDriver', null)
            else commit('setCurrentDriver', state.data.find(el => el.id === id))
        },
        async putDriver({dispatch, commit, }) {
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
        async postDriver({dispatch, commit}) {
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
        async deleteDriver({dispatch, commit}) {
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
    },
    getters: {
        getDriver: state => {
            let {firstName, lastName, phoneNumber, email} = state.currentDriver
            return {firstName, lastName, phoneNumber, email}
        }
    }
}
