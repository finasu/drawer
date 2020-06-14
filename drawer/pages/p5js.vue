<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" sm="12">
        <div id="p5Canvas"></div>
        <!-- <div class="wrapper">
          <canvas id="canvas" width="600" height="500"></canvas>
        </div> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      project: 'default'
    }
  },
  created() {},
  mounted() {
    const p5Script = (p5) => {
      // p5 のセットアップ
      p5.setup = () => {
        const canvas = p5.createCanvas(500, 500)
        canvas.parent('p5Canvas')
        p5.background(230)
        p5.stroke(50)
        p5.strokeWeight(1.3)
        p5.strokeJoin(p5.ROUND)

        // これらはデフォルト設定だが明示しておく
        p5.setAttributes('antialias', true)
        p5.frameRate(60)
        p5.smooth()
      }

      // draw の設定
      p5.draw = () => {
        if (p5.mouseIsPressed === true) {
          // console.log(p5.getFrameRate())
          p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY)
        }
      }
    }

    // instance mode でp5を使う
    const P5 = require('p5')
    const myp5 = new P5(p5Script)
    console.log(myp5)
  },
  methods: {}
}
</script>

<style>
.wrapper {
  width: 100%;
  height: 100%;
}

#p5Canvas {
  border: solid 1px #000;
}
</style>
