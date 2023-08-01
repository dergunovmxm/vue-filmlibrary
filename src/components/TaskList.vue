<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="content-wrapper">
        <section>
            <div class="container">
                <h1 class="ui-title-1">Tasks</h1>
                <div class="task-list">
                    <div class="task-item" v-for="item in items" :key="item.id" :class="{ completed: item.completed }">
                        <div class="ui-card ui-card--shadow">

                            <div class="task-item__info">
                                <div class="task-item__main-info">
                                    <span class="ui-label ui-label--primary">{{ item.whatWatch }}</span>
                                    <span>Total Time: {{ item.time }} </span>
                                </div>
                                <span class="button-close"></span>
                            </div>

                            <div class="task-item__content">

                                <div class="task-item__header">
                                    <div class="ui-checkbox-wrapper">
                                        <input class="ui-checkbox" type="checkbox" v-model="item.completed">
                                    </div>
                                    <span class="ui-title-3">{{ item.title }}</span>
                                </div>

                                <div class="task-item__body">
                                    <p class="ui-text-regular">
                                        {{ item.description }}
                                    </p>
                                </div>

                            </div>
                        </div>
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
                items: [
                {
                    'id': 1,
                    'title': 'Game of Thrones',
                    'description': 'Best of all',
                    'whatWatch': 'Serial',
                    'completed': false,
                    'editing': false
                },
                {
                    'id': 2,
                    'title': 'Trigger',
                    'description': 'Best film',
                    'whatWatch': 'Film',
                    'completed': false,
                    'editing': false
                },
            ]
            }
        }
    }
</script>

<style lang="stylus" scoped>
.task-item
        margin-bottom: 20px
        &:last-child
            margin-bottom: 0px 
    .task-item__info
        display: flex
        justify-content: space-between
        align-items: center
        margin-bottom: 20px
    .button-close{
        width 20px
        height @width
    }
    .ui-label
        margin-right: 8px
    .task-item__header
        display flex
        align-items center
        margin-bottom 18px
        .ui-checkbox-wrapper
            margin-right 8px
            display flex
            align-items: center
        .ui-title-3
            margin-bottom 0        
</style>