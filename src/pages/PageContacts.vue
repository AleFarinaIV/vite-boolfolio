<script>
import ContactForm from '../components/ContactForm.vue';

export default {
    components: {
        ContactForm,
    }
}
</script>

<template>

    <div class="container">
        <div class="row">
            <div class="col-12 p-5">
                <h1 class="py-4">Questa è la pagina dei miei contatti</h1>
                <div class="row bg-success border rounded-5 mb-5">
                    <div class="col-12 p-4 text-white">
                        <div class="row p-3">
                            <div class="col-4">
                                <h2 class="pb-3">Contatti</h2>
                                <ul class="list-unstyled ps-2">
                                    <li>
                                        <strong>Email:</strong><a class="text-decoration-none text-white" href="mailto:info@example.com"> info@example.com</a>
                                    </li>
                                    <li class="my-3">
                                        <strong>Telephone:</strong><a class="text-decoration-none text-white" href="tel:+39 012 345 6789"> +39 012 345 6789</a>
                                    </li>
                                    <li>
                                        <strong>Web Site:</strong><a class="text-decoration-none text-white" href="https://www.example.com" target="_blank"> www.example.com</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-4">
                                <h2 class="pb-3">Social Media</h2>
                                <ul class="list-unstyled ps-2">
                                    <li>
                                        <i class="bi bi-twitter me-2"></i><a class="text-decoration-none text-white" href="https://twitter.com/example" target="_blank">@example</a>
                                    </li>
                                    <li class="my-3">
                                        <i class="bi bi-facebook me-2"></i><a class="text-decoration-none text-white" href="https://www.facebook.com/example" target="_blank">@example</a>
                                    </li>
                                    <li>
                                        <i class="bi bi-instagram me-2"></i><a class="text-decoration-none text-white" href="https://www.instagram.com/example" target="_blank">@example</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-4">
                                <h2></h2>
                                <!-- <iframe src="https://github.com/AleFarinaIV" height="200" width="250"></iframe> -->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="py-4 bg-success border rounded-5 text-white">
                    <div class="text-center pb-3">
                        <h2>Contattami subito!</h2>
                        <p class="lh-lg pt-2 px-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Iste eos facilis, vitae ducimus modi repudiandae optio 
                            cumque eligendi maxime ipsam neque autem voluptates, 
                            necessitatibus dolor quod mollitia. Illum, neque odio!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Iste eos facilis, vitae ducimus modi repudiandae optio 
                            cumque eligendi maxime ipsam neque autem voluptates, 
                            necessitatibus dolor quod mollitia. Illum, neque odio!
                        </p>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>

</style>