<script>
import { store } from '../store.js';
import axios from 'axios';

export default {
    data() {
        return{
            store,
            name: '',
            surname: '',
            phone: '',
            email_address: '',
            content: '',
            success: false,
            errors: '',
        }
    },
    methods: {
        sendForm() {
            const data = {
                name: this.name,
                surname: this.surname,
                phone: this.phone,
                email_address: this.email_address,
                content: this.content,
            }

            this.errors = {}

            axios.post(`${store.apiUrl}/contacts`, data).then((response) => {
                // console.log(response);
                if(response.data.success) {
                    this.name ='',
                    this.surname ='',
                    this.phone ='',
                    this.email_address ='',
                    this.content =''
                    this.success = true
                }else {
                    this.errors = response.data.errors
                }
            })
        }
    }
}
</script>

<template>

    <form class="px-5" method="post" @submit.prevent="sendForm()">
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="form-group">
                    <label class="mb-2" for="name">Name</label>
                    <input type="text" class="form-control" id="name" name="name" v-model="name" placeholder="Name">
                </div>
                <p v-for="error, i in errors.name" :key="`message-error-${i}`" class="text-danger">
                    {{ error }}
                </p>
            </div>
            <div class="col-12 col-md-6">
                <div class="form-group">
                    <label class="mb-2" for="surname">Surname</label>
                    <input type="text" class="form-control" id="surname" name="surname" v-model="surname" placeholder="Surname">
                </div>
                <p v-for="error, i in errors.surname" :key="`message-error-${i}`" class="text-danger">
                    {{ error }}
                </p>
            </div>
        </div>
        <div class="row py-3">
            <div class="col-12 col-md-6">
                <div class="form-group">
                    <label class="mb-2" for="phone">Telephone</label>
                    <input type="tel" class="form-control" id="phone" name="phone" v-model="phone" placeholder="Telephone">
                </div>
                <p v-for="error, i in errors.phone" :key="`message-error-${i}`" class="text-danger">
                    {{ error }}
                </p>
            </div>
            <div class="col-12 col-md-6">
                <div class="form-group">
                    <label class="mb-2" for="email_address">Email</label>
                    <input type="text" class="form-control" id="email_address" name="email_address" v-model="email_address" placeholder="Email">
                </div>
                <p v-for="error, i in errors.email_address" :key="`message-error-${i}`" class="text-danger">
                    {{ error }}
                </p>
            </div>
        </div>
        <div class="form-group pb-4">
            <label class="mb-2" for="content">Message</label>
            <textarea class="form-control" id="content" name="content" v-model="content" placeholder="Message" rows="5"></textarea>
        </div>
        <p v-for="error, i in errors.content" :key="`message-error-${i}`" class="text-danger">
            {{ error }}
        </p>
        <div class="d-flex justify-content-between align-items-center">
            <button type="submit" class="btn btn-sm btn-light">Submit</button>
            <div class="alert alert-success m-0" v-if="success">
                Messaggio inviato con successo!
            </div>
        </div>
    </form>

</template>

<style lang="scss" scoped>
    
</style>