<script>
export default {
    
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
                                <iframe src="https://github.com/AleFarinaIV" height="200" width="250"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="py-4 bg-success border rounded-5 text-white">
                    <div class="text-center pb-3">
                        <h2>Mail</h2>
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
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>

</style>