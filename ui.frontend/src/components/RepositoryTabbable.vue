<template>
    <div id="tabbable">
        <div class="tabs">
            <div class="tab" v-for="(d, i) in data" :key="`${d.tab.name}_${i}`" @click="toTab(i)">
                {{ d.tab.name }}
                <div class="rep-count">
                    {{ d.tab.count }}
                </div>
                <hr v-if="i === currentTabIndex">
            </div>
        </div>
        <div class="tabbable-content">
            <div class="tabbable-content-render">
                <div class="repo" v-for="r in data[currentTabIndex].content" :key="r.name">
                    <div class="repo-wrapper">
                        <div class="repo-wrapper-name">
                            <div class="repo-wrapper-name-data">{{ r.name }}</div>
                            <div class="repo-wrapper-name-description">{{ r.description }}</div>
                        </div>
                        <div class="repo-wrapper-btn">
                            <custom-button @click="share(r.html_url)" square>Compartilhar</custom-button>
                        </div>
                    </div>
                    <hr>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
