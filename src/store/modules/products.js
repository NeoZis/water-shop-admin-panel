import api from "@/service/api";

export default {
    state: () => ({
        data: [],
        categories: [],
        selectedProduct: {},
        selectedCategory: {}
    }),
    mutations: {
        setProducts(state, data) {
            state.data = data
        },
        setCategories(state, data) {
            state.categories = data
        },
        setSelectedProduct(state, data) {
            state.selectedProduct = data
        },
        setSelectedCategory(state, data) {
            state.selectedCategory = data
        }
    },
    actions: {
        async getProducts({commit, rootState}) {
            try {
                const {data} = await api.GET('test-json/products.json', rootState.token)
                commit('setProducts', data)
            } catch (e) {
                console.log(e);
            }
        },
        async getCategories({commit, rootState}) {
            try {
                const {data} = await api.GET('test-json/categories.json', rootState.token)
                commit('setCategories', data)
            } catch (e) {
                console.log(e);
            }
        },
        async getSelectedProduct({commit, state}, id) {
            const product = state.data.find(el=>el.id === id)
            commit('setSelectedProduct', product)
        },
        async getSelectedCategory({commit, state}, id) {
            const category = state.categories.find(el=>el.id === id)
            commit('setSelectedCategory', category)
        },
        async postProduct({dispatch, commit}) {
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
        async postCategory({dispatch, commit}) {
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
        async putProduct({dispatch, commit}) {
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
        async putCategory({dispatch, commit}) {
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
        async deleteCategory({dispatch, commit}) {
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
        async deleteProduct({dispatch, commit}) {
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
        getSelectedProduct: state => state.selectedProduct,
        getSelectedCategory: state => state.selectedCategory,
    }
}
