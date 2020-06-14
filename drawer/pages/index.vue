<template>
  <v-container fluid>
    <nuxt-link to="/p5js">p5js</nuxt-link>

    <v-row justify="center">
      <v-col cols="12" sm="12">
        <div class="wrapper">
          <canvas id="canvas" width="600" height="500"></canvas>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { fabric } from 'fabric'

export default {
  components: {},
  data() {
    return {
      project: 'default'
    }
  },
  created() {},
  mounted() {
    console.log('Component created!')
    const canvas = new fabric.Canvas('canvas')

    // fabric.Object.prototype.transparentCorners = false
    canvas.isDrawingMode = true
    // canvas.freeDrawingBrush = new fabric.PencilBrush(canvas)
    canvas.freeDrawingBrush.color = '#000'
    canvas.freeDrawingBrush.width = 1

    // const canvas = new fabric.Canvas('canvas')
    // const rect = new fabric.Rect({
    //   left: 10,
    //   top: 20,
    //   originX: 'left',
    //   originY: 'top',
    //   width: 150,
    //   height: 120,
    //   angle: -10,
    //   fill: 'rgba(255,0,0,0.5)',
    //   transparentCorners: false
    // })
    // canvas.add(rect).setActiveObject(rect)
    console.log(JSON.stringify(canvas))
  },
  methods: {}
}
</script>

<style>
.wrapper {
  width: 100%;
  height: 100%;
}

#canvas {
  border: solid 1px #000;
}
</style>
