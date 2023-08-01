<template>
    <div class="content-wrapper">
        <section>
            <div class="container">
                <h1 class="ui-title-1">Homepage</h1>
                <input type="text" placeholder="What we will watch?" @keyup.enter="addTask" v-model="taskTitle" />
                <textarea type="text" v-model="taskDescription" @keyup.enter="addTask" />

                <div class="option-list">
                    <input class="whatWatch--radio" type="radio" id="radioFilm" value="Film" v-model="whatWatch" />
                    <label for="radioFilm">Film</label>
                    <input class="whatWatch--radio" type="radio" id="radioSerial" value="Serial" v-model="whatWatch" />
                    <label for="radioSerial">Serial</label>
                </div>

                <div class="total-time">
                    <div class="total-time__film" v-if="whatWatch === 'Film'">
                        <span>Total Film Times</span>
                    </div>
                    <div class="total-time__serial" v-if="whatWatch === 'Serial'">
                        <span>Total Serial Times</span>
                    </div>
                </div>

                <div class="tag-list">
                    <div class="ui-tag__wrapper">
                        <div class="ui-tag"><span class="tag-title">Dogs</span><span class="button-close"></span></div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="task-list">
                    <div class="task-item" v-for="item in items" :key="item.id" :class="{ completed: item.completed }">
                        <div class="ui-card ui-card--shadow">

                            <div class="task-item__info">
                                <div class="task-item__main-info">
                                    <span class="ui-label ui-label--primary">{{ item.whatWatch }}</span>
                                    <span>Total Time: </span>
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
    data() {
        return {
            taskTitle: '',
            taskDescription: '',
            whatWatch: 'Film',
            taskId: 3,
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
    },
    methods: {
        addTask() {
            if (this.taskTitle === '') {
                return
            }
            this.items.push({
                id: this.taskId,
                title: this.taskTitle,
                description: this.taskDescription,
                whatWatch: this.whatWatch,
                completed: false,
                editing: false

            })
            this.taskId += 1
            this.taskTitle = ''
            this.taskDescription = ''
        }
    }
}
</script>

<style lang="stylus" scoped>
    .option-list 
        display: flex
        .whatWatch--radio
            margin-right 12px
        label 
            margin-right 20px
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