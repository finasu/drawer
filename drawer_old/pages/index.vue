<template>
  <v-container fluid>
    <!-- <nuxt-link to="/p5js">p5js</nuxt-link> -->

    <v-row justify="center">
      <v-col cols="12" sm="12">
        <img
          src="../assets/icon/pencil.png"
          class="width-32"
          @click="clear()"
        />
        <img src="../assets/icon/broom.png" class="width-32" @click="clear()" />
        <img src="../assets/icon/clean.png" class="width-32" @click="clear()" />

        <v-btn color="error" @click="changeRed()">赤</v-btn>
        <v-btn color="teal" @click="changeGreen()">緑</v-btn>
        <v-btn color="primary" @click="changeBlue()">青</v-btn>
        <v-btn color="" @click="changeBlack()">黒</v-btn>

        <v-btn color="" @click="undo()">undo</v-btn>
        <v-btn color="" @click="redo()">redo</v-btn>

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
      canvas: ''
    }
  },
  created() {},
  mounted() {
    this.canvas = new fabric.Canvas('canvas', { isDrawingMode: true })

    fabric.Object.prototype.transparentCorners = false

    this.canvas.freeDrawingBrush = new fabric.PencilBrush(this.canvas)
    this.canvas.freeDrawingBrush.width = 2
    this.changeBlack()

    console.log(JSON.stringify(this.canvas))

    // var image = canvas.toDataURL(“image/png”).replace(“image/png”, “image/octet-stream”)
    // window.location.href=image;
  },
  methods: {
    clear() {
      this.canvas.clear()
    },
    changeRed() {
      this.canvas.freeDrawingBrush.color = '#09ff0000'
    },
    changeGreen() {
      this.canvas.freeDrawingBrush.color = '#0f0'
    },
    changeBlue() {
      this.canvas.freeDrawingBrush.color = '#00f'
    },
    changeBlack() {
      this.canvas.freeDrawingBrush.color = '#000'
    },
    undo() {
      if (this.canvas._objects.length > 0) {
        const undoObject = this.canvas._objects.pop()
        this.canvasHistory.push(undoObject)
        this.canvas.renderAll()
      }
    },
    redo() {
      if (this.canvasHistory.length > 0) {
        this.isRedoing = true
        const redoObject = this.canvasHistory.pop()
        this.canvas.add(redoObject)
      }
    }
  }
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

.width-32 {
  width: 32px;
}
</style>
