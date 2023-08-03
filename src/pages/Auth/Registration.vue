<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="content-wrapper">
        <section>
            <div class="container">
               <div class="auth"> 
                <div class="auth__banner">
                    <h1 class="ui-title-2">HEllo Banner</h1>
                </div>
                <div class="auth__form">
                    <span class="ui-title-2">Registration</span>
                    <form>
                        <input type="email" placeholder="Email" v-model="email"/>
                        <input type="password" placeholder="Password" v-model="password"/>
                        <input type="password" placeholder="Repeat Password" v-model="repeatPassword"/>
                    </form>
                </div>
               </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                email: '',
                password: '',
                repeatPassword: ''
            }
        }
    }
</script>

<style lang="stylus" scoped>
.auth
    display flex
.auth__banner,
.auth__form
    width: 50%
</style>