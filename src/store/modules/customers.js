import api from "@/service/api";

export default {
    state: () => ({
        data: [],
        currentCustomer: null

    }),
    mutations: {
        setCustomers(state, data) {
            state.data = data
        },
        setCurrentCustomer(state, data) {
            state.currentCustomer = data
        }
    },
    actions: {
        async getCustomers({commit, rootState}) {
            await api.GET('test-json/customers.json', rootState.token)
                .then(({data}) => commit('setCustomers', data))
                .catch(console.dir)
        },
        async deleteCustomer({dispatch, commit}) {
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
        setCurrentCustomer({commit, state}, id = null) {
            if (id === null) commit('setCurrentCustomer', null)
            else commit('setCurrentCustomer', state.data.find(el => el.id === id))
        },
        async putCustomer({dispatch, commit}) {
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
        getFilteredData(state) {
            return state.data.map(el => ({
                id: el.id,
                name: el.firstName ?? '----',
                lastName: el.lastName ?? '----',
                number: el.phoneNumber ?? '----',
                birthday: el?.birthDate ? new Intl.DateTimeFormat('en-GB').format(new Date(el.birthDate)) : '----',
                city: el.cityName ?? '----',
                family: el.familyMembersCount ?? '----',
                lastOrder: el.ordersId?.length ? el.ordersId[0] : '----',
                subscription: el.subscriptionIsActive
            }))
        },
        getFullData: state => id => state.data.find(el =>el.id === id),
        getCustomers: state => state.data,
        getCustomer: state => id => state.data.find(el => el.id === id),
        getCurrentCustomer: state => {
            let {firstName, lastName, phoneNumber, birthDate, cityName, familyMembersCount, subscriptionIsActive, ordersId} = state.currentCustomer
            return {firstName, lastName, phoneNumber, birthDate, cityName, familyMembersCount, subscriptionIsActive, ordersId}
        }
    }
}
