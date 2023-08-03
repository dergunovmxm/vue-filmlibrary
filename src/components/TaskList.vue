<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="content-wrapper">
        <section>
            <div class="container">
                <div class="task-list__header">
                    <h1 class="ui-title-1">Tasks</h1>
                    <div class="buttons-list">
                        <div class="button button--round button-default" @click="filter = 'active'">Active</div>
                        <div class="button button--round button-default" @click="filter= 'completed'">Completed</div>
                        <div class="button button--round button-default" @click="filter= 'all'">All</div>
                    </div>
                </div>
                <div class="task-list">
                    <div class="task-item" v-for="item in itemsFilter" :key="item.id" :class="{ completed: item.completed }">
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

                                <div class="task-item__footer">
                                    <div class="tag-list">
                                        <div class="ui-tag__wrapper" v-for="tag in item.tags" :key="tag.title">
                                            <div class="ui-tag" :class="{ used: tag.use }">
                                                <span class="tag-title">{{ tag.title }}</span>
                                            </div>
                                        </div>
                                    </div>
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
            filter: 'all'
        }
    },
    computed: {
        itemsFilter(){
            if(this.filter === 'active'){
                return this.$store.getters.itemNotCompleted
            }else if (this.filter === 'completed'){
                return this.$store.getters.itemCompleted
            } else if (this.filter === 'all') {
                return this.$store.getters.items
            }
            return this.filter === 'active'
        }
    }
}
</script>

<style lang="stylus" scoped>
.task-item
        margin-bottom: 20px
        .ui-checkbox:checked:before
            border-color: #909399
        &.completed
            .ui-title-3,
            .ui-text-regular,
            .ui-tag
                text-decoration: line-through
                color: #909399
        &:last-child
            margin-bottom: 0px 
    .task-item__info
        display: flex
        justify-content: space-between
        align-items: center
        margin-bottom: 20px
    .task-item__body
        margin-bottom 20px   
    .ui-tag__wrapper
        margin-right 10px
        &:last-child
            margin-right 0     
    .button-close
        width 20px
        height @width
    
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
    .task-list__header
        display flex
        justify-content space-between
        align-items center
        margin-bottom 30px
    .ui-title-1
        margin-bottom 0
    .button 
        margin-right 10px
        
     
</style>