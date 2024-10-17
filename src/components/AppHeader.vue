<script>
export default {
    
}
</script>

<template>

    <header>
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex justify-content-between align-items-center">
                    <div>
                        <h4 class="text-white">Qui andrà un logo</h4>
                        <!-- <img src="" alt="logo"> -->
                    </div>
                    <ul class="list-unstyled d-flex m-0">
                        <li>
                            <router-link :to="{ name: 'homepage' }">Home</router-link>
                        </li>
                        <li class="mx-3">
                            <router-link :to="{ name: 'projects' }">Projects</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'contacts' }">Contacts</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    
</template>

<style lang="scss" scoped>
    header {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
        background-color: black;
        width: 100%;
        height: 80px;
        display: flex;
        align-items: center;

        a {
            text-decoration: none;
            color: white;
            font-size: 14px;
            font-weight: 500;
            &:hover {
                color: grey;
            }
        }
    }
</style>