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
                        <span class="time-title">Hours</span>
                        <input class="time-input" type="number" v-model="filmHours" />
                        <span class="time-title">Minutes</span>
                        <input class="time-input" type="number" v-model="filmMinutes" />
                        <p>{{ filmTime }}</p>
                    </div>
                    <div class="total-time__serial" v-if="whatWatch === 'Serial'">
                        <span class="time-title">How many seasons?</span>
                        <input class="time-input" type="number" v-model="serialSeason" />
                        <span class="time-title">How many series</span>
                        <input class="time-input" type="number" v-model="serialSeries" />
                        <span class="time-title">How long is one series? (minutes)</span>
                        <input class="time-input" type="number" v-model="serialSeriesMinutes" />
                        <p>{{ serialTime }}</p>
                    </div>
                </div>

                <div class="tag-list tag-list--add">
                    <div class="ui-tag__wrapper" @click="tagMenuShow = !tagMenuShow">
                        <div class="ui-tag">
                            <span class="tag-title">Add New</span>
                            <span class="button-close" :class="{ active: !tagMenuShow }"></span>
                        </div>
                    </div>
                </div>

                <div class="tag-list tag-list--menu" v-if="tagMenuShow">
                    <input class="tag-add--input" type="text" placeholder="New tag" v-model="tagTitle"
                        @keyup.enter="newTag" />
                    <div class="button button-default" @click="newTag">Send</div>
                </div>

                <div class="tag-list">
                    <div class="ui-tag__wrapper" v-for="tag in tags" :key="tag.title">
                        <div class="ui-tag" @click="addTagUsed(tag)" :class="{ used: tag.use }">
                            <span class="tag-title">{{ tag.title }}</span>
                            <span class="button-close"></span>
                        </div>
                    </div>
                    <p>{{ tagsUsed }}</p>
                </div>
                <div class="button-list">
                    <div class="button button--round button-primary" @click="addTask">Send</div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            //model
            taskTitle: '',
            taskDescription: '',
            whatWatch: 'Film',
            taskId: 3,
            //time
            filmHours: 1,
            filmMinutes: 24,
            serialSeason: 1,
            serialSeries: 8,
            serialSeriesMinutes: 48,
            //tags
            tagMenuShow: false,
            tagsUsed: [],
            tagTitle: '',
            tags: [
                {
                    title: 'Triller',
                    use: false
                },
                {
                    title: 'Comedy',
                    use: false
                },
                {
                    title: 'Adventure',
                    use: false
                }
            ]
        }
    },
    methods: {
        newTag() {
            if (this.tagTitle === '') {
                return
            }
            this.tags.push({
                title: this.tagTitle,
                used: false
            })
            // const tag = {
            //   title: this.tagTitle,
            // }
        },
        addTask() {
            if (this.taskTitle === '') {
                return
            }
            let time
            if (this.whatWatch === 'Film') {
                time = this.filmTime
            } else {
                time = this.serialTime
            }
            const item = {
                id: this.taskId,
                title: this.taskTitle,
                description: this.taskDescription,
                whatWatch: this.whatWatch,
                time,
                tagsUsed: this.tagsUsed,
                completed: false,
                editing: false

            }
            console.log(item)
            this.taskId += 1
            this.taskTitle = ''
            this.taskDescription = ''
            this.tagsUsed = []
        },
        getHoursAndMinutes(minutes) {
            let hours = Math.trunc(minutes / 60)
            let min = minutes % 60
            return hours + ' Hours ' + min + ' Minutes'
        },
        addTagUsed(tag) {
            tag.use = !tag.use
            if (tag.use) {
                this.tagsUsed.push(tag.title)
            } else {
                this.tagsUsed.splice(tag.title, 1)
            }
        }
    },
    computed: {
        filmTime() {
            let min = (this.filmHours * 60) + (this.filmMinutes * 1)
            return this.getHoursAndMinutes(min)
        },
        serialTime() {
            let min = this.serialSeason * this.serialSeries * this.serialSeriesMinutes
            return this.getHoursAndMinutes(min)
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
    .total-time
        margin-bottom 20px
    .time-title
        display block
        margin-bottom 6px
    .time-input
        max-width: 80px
        margin-right 10px
    .tag-list
        margin-bottom 20px
    .ui-tag__wrapper
        margin-right 18px
        margin-bottom 10px
        &:last-child
            margin-right 0
    .ui-tag
        cursor pointer
        .button-close
            &.active
                transform: rotate(45deg)
        &.used 
            background-color: #444ce0
            color: #fff
            .button-close
                &:before
                &:after
                    background-color: #fff
    .tag-list--menu
        display flex
        justify-content: space-between
        align-items: center
    .tag-add--input
        margin-bottom 0
        margin-right 10px
        height 42
    .button-list
        display flex
        justify-content flex-end
</style>