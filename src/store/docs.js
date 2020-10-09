import firebase from "firebase";

export default {
    state: {
        docs: {},
        docsDetail: {}
    },
    mutations: {
        setDocs(state, docs) {
            state.docs = docs
        },
        setDocDetail(state, docs) {
            state.docsDetail[docs.id] = docs.content
        },
        setNewDoc(state, doc) {
            state.docs[doc.id] = {name: doc.name, preview: doc.preview}
        },
        deleteDoc(state, docKey) {
            delete state.docs[docKey]
        }
    },
    actions: {
        async fetchDocs({commit}) {
            const docs = (await firebase.database().ref(`/docs`).once('value')).val()
            commit('setDocs', docs)
        },
        async getDocDetail({commit}, docKey) {
            const content = (await firebase.database().ref(`/docs-detail/${docKey}`).once('value')).val()
            commit('setDocDetail', {id: docKey, content})
        },
        async editDocDetail({commit}, {docKey, content}) {
            await firebase.database().ref(`/docs-detail/${docKey}`).set({content})
            commit('setDocDetail', {id: docKey, content})
        },
        async setNewDoc({commit}, {name, preview}) {
            try {
                const newDocKey = firebase.database().ref(`/docs`).push().key
                await firebase.database().ref(`/docs/${newDocKey}`).set({name,preview})
                await firebase.database().ref(`/docs-detail/${newDocKey}`).set({content: 'content'})
                commit('setNewDoc', {id: newDocKey, name, preview})
            } catch (e) {
                console.log(e)
                throw e
            }
        },
        async deleteDoc({commit}, docKey) {
            console.log(docKey)
            try {
                await firebase.database().ref(`/docs/${docKey}`).remove()
                await firebase.database().ref(`/docs-detail/${docKey}`).remove()
                commit('deleteDoc', docKey)
            } catch (e) {
                console.log(e);
                throw e
            }
        }
    },
    getters: {
        docs: s => s.docs,
        docsDetail: s => s.docsDetail
    }
}