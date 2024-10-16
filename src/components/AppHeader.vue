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
                        <li class="me-3">
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Projects</a>
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
            font-size: 18px;
            &:hover {
                color: grey;
            }
        }
    }
</style>