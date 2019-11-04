<template>
  <div class="timelines container">
    <ul class="timeline">
      <li class="pt-5">
        <div class="timeline-badge-start">
          <i class="glyphicon glyphicon-check">
            <span
              class="iconify mb-2"
              data-icon="simple-line-icons:briefcase"
              data-inline="false"
            ></span>
          </i>
        </div>
      </li>
      <li
        v-for="line in timelines"
        v-bind:key="line.id"
        v-bind:class="{ 'timeline-inverted': isRight(line.id) }"
      >
        <div class="timeline-badge">
          <i class="glyphicon glyphicon-check"></i>
        </div>
        <div class="timeline-panel">
          <div class="timeline-heading">
            <h4 class="timeline-title">{{ line.title }}</h4>
            <p>{{ line.date }}</p>
          </div>
          <div class="timeline-body">
            <p class="text-left">
              {{ line.body }}
            </p>
          </div>
          <div class="tag">
            <b-badge
              pill
              variant="info"
              v-for="tag in line.tags"
              v-bind:key="tag"
              class="m-2 tag-badge"
            >
              {{ tag }}
            </b-badge>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script scoped>
export default {
  name: "Timelines",
  props: {
    timelines: {
      type: Array,
      required: true,
      default: function() {
        return [];
      }
    }
  },
  methods: {
    isRight(id) {
      return id % 2 == 0;
    }
  }
};
</script>

<style>
.tag-badge {
  background-color: cornflowerblue;
}

.timeline {
  list-style: none;
  padding: 20px 0 20px;
  position: relative;
}

.timeline > li {
  margin-bottom: 20px;
  position: relative;
}

.timeline > li:before,
.timeline > li:after {
  content: " ";
  display: table;
}

.timeline > li:after {
  clear: both;
}

.timeline > li:before,
.timeline > li:after {
  content: " ";
  display: table;
}

.timeline > li:after {
  clear: both;
}

.timeline > li > .timeline-panel:before {
  position: absolute;
  top: 13px;
  right: -15px;
  display: inline-block;
  border-top: 15px solid transparent;
  border-left: 15px solid #ccc;
  border-right: 0 solid #ccc;
  border-bottom: 15px solid transparent;
  content: " ";
}

.timeline > li > .timeline-panel:after {
  position: absolute;
  top: 14px;
  right: -14px;
  display: inline-block;
  border-top: 14px solid transparent;
  border-left: 14px solid #fff;
  border-right: 0 solid #fff;
  border-bottom: 14px solid transparent;
  content: " ";
}

.timeline:before {
  top: 0;
  bottom: 0;
  position: absolute;
  content: " ";
  width: 3px;
  background-color: #eeeeee;
  left: 50%;
  margin-left: -1.5px;
}

.timeline > li > .timeline-panel {
  width: 47%;
  float: left;
  border: 1px solid #d4d4d4;
  border-radius: 2px;
  padding: 20px;
  position: relative;
  -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);
}

.timeline > li > .timeline-badge-start {
  color: #fff;
  width: 45px;
  height: 45px;
  line-height: 50px;
  font-size: 1.4em;
  text-align: center;
  position: absolute;
  top: -25px;
  left: 50%;
  margin-left: -22.5px;
  background-color: rgb(51, 47, 71);
  z-index: 100;
  border-top-right-radius: 50%;
  border-top-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;
}

.timeline > li > .timeline-badge {
  color: #fff;
  width: 25px;
  height: 25px;
  line-height: 50px;
  font-size: 1.4em;
  text-align: center;
  position: absolute;
  top: 16px;
  left: 50%;
  margin-left: -12.5px;
  background-color: rgb(51, 47, 71);
  z-index: 100;
  border-top-right-radius: 50%;
  border-top-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;
}

@media (min-width: 992px) {
  .timeline > li.timeline-inverted > .timeline-panel {
    float: right;
  }

  .timeline > li.timeline-inverted > .timeline-panel:before {
    border-left-width: 0;
    border-right-width: 15px;
    left: -15px;
    right: auto;
  }

  .timeline > li.timeline-inverted > .timeline-panel:after {
    border-left-width: 0;
    border-right-width: 14px;
    left: -14px;
    right: auto;
  }
}

@media (max-width: 991px) {
  .timeline:before {
    left: 0%;
  }

  .timeline > li > .timeline-panel {
    width: 95%;
    float: right;
  }

  .timeline > li > .timeline-badge,
  .timeline > li > .timeline-badge-start {
    left: 0%;
  }

  .timeline > li > .timeline-panel:before {
    border-left-width: 0;
    border-right-width: 15px;
    left: -15px;
    right: auto;
  }

  .timeline > li > .timeline-panel:after {
    border-left-width: 0;
    border-right-width: 14px;
    left: -14px;
    right: auto;
  }
}

@media (max-width: 767px) {
  .timeline:before {
    left: 0%;
  }

  .timeline > li > .timeline-panel {
    width: 93%;
    float: right;
  }

  .timeline > li > .timeline-badge,
  .timeline > li > .timeline-badge-start {
    left: 0%;
  }

  .timeline > li > .timeline-panel:before {
    border-left-width: 0;
    border-right-width: 15px;
    left: -15px;
    right: auto;
  }

  .timeline > li > .timeline-panel:after {
    border-left-width: 0;
    border-right-width: 14px;
    left: -14px;
    right: auto;
  }
}

@media (max-width: 576px) {
  .timeline:before {
    left: 10%;
  }

  .timeline > li > .timeline-panel {
    width: 83%;
    float: right;
  }

  .timeline > li > .timeline-badge,
  .timeline > li > .timeline-badge-start {
    left: 10%;
  }

  .timeline > li > .timeline-panel:before {
    border-left-width: 0;
    border-right-width: 15px;
    left: -15px;
    right: auto;
  }

  .timeline > li > .timeline-panel:after {
    border-left-width: 0;
    border-right-width: 14px;
    left: -14px;
    right: auto;
  }
}

.timeline-badge.primary {
  background-color: #2e6da4 !important;
}

.timeline-badge.success {
  background-color: #3f903f !important;
}

.timeline-badge.warning {
  background-color: #f0ad4e !important;
}

.timeline-badge.danger {
  background-color: #d9534f !important;
}

.timeline-badge.info {
  background-color: #5bc0de !important;
}

.timeline-title {
  margin-top: 0;
  color: inherit;
}

.timeline-body > p,
.timeline-body > ul {
  margin-bottom: 0;
}

.timeline-body > p + p {
  margin-top: 5px;
}
</style>
