<script>
import { store } from '../store';

export default {
    data() {
        return{
            store,
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
                    <input type="text" class="form-control" id="name" name="name" placeholder="Name" required>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="form-group">
                    <label class="mb-2" for="surname">Surname</label>
                    <input type="text" class="form-control" id="surname" name="surname" placeholder="Surname" required>
                </div>
            </div>
        </div>
        <div class="row py-3">
            <div class="col-12 col-md-6">
                <div class="form-group">
                    <label class="mb-2" for="phone">Telephone</label>
                    <input type="tel" class="form-control" id="phone" name="phone" placeholder="Telephone" required>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="form-group">
                    <label class="mb-2" for="email">Email</label>
                    <input type="text" class="form-control" id="email" name="email" placeholder="Email" required>
                </div>
            </div>
        </div>
        <div class="form-group pb-4">
            <label class="mb-2" for="message">Message</label>
            <textarea class="form-control" id="message" name="message" placeholder="Enter message" rows="5" required></textarea>
        </div>
        <button type="submit" class="btn btn-sm btn-light">Submit</button>
    </form>

</template>

<style lang="scss" scoped>
    
</style>