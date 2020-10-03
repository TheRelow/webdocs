import firebase from "firebase";

export default {
    state: {
        docs: {},
    },
    mutations: {
        setDocs(state, info) {
            state.docs = info
        },
        newDoc(state, info) {
            console.log(info)
        }
    },
    actions: {
        // eslint-disable-next-line no-unused-vars
        async fetchDocs({dispatch, commit}) {
            const docs = (await firebase.database().ref(`/docs`).once('value')).val()
            const myDocs = []
            for (let doc in docs) {
                myDocs.push(Object.assign({id: doc}, docs[doc]))
            }
            commit('setDocs', docs)
        },
        // eslint-disable-next-line no-empty-pattern
        async setNewDoc({}, {name, preview}) {
            try {
                console.log(name)
                console.log(preview)
                await firebase.database().ref(`/docs/${name}`).set({
                    name,
                    preview
                })
            } catch (e) {
                console.log(e)
                throw e
            }
        },
        // eslint-disable-next-line no-empty-pattern
        async deleteDoc({}, {name}) {
            try {
                await firebase.database().ref(`/docs/${name}`).remove()
            } catch (e) {
                console.log(e);
                throw e
            }
        }
    },
    getters: {
        docs: s => s.docs
    }
}