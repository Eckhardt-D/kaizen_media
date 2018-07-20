<template>
  <div class="about">
      <b-container class="py-5">
        <b-row id="cardHolder" class="mt-5">
          <b-col class="my-2" v-for="(item, i) in packages" :key ="i" lg="4" md="6" sm="12">
            <b-card class="cardAdj">
                <img class="card-img-top" :src="item.image" alt="">
                <h5 class="pt-3">{{item.name}}</h5>
                {{item.desc}}
              <br>
                <b-btn class="cardBtn mt-3">Enquire</b-btn>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
      <div class="bottomInfo">
        <b-row class="pt-3 m-0">
          <b-col class="mx-auto pb-5 pl-5" lg="4">
             <b-media class="text-white" tag="li">
              <img src="../assets/eckhardt.jpg" class="li-img" slot="aside"  height="64px" alt="placeholder" />
              <h5 class="mt-0 mb-1 text-white">Eckhardt Dreyer</h5>
              <p style="font-weight: thin`;">Full stack web developer</p>
              <ul class="skills">
                <li class="specialLi"><b>Experienced in:</b></li>
                <li class="specialLi">HTML, JavaScript, CSS</li>
                <li class="specialLi">Vue.js, Electron, p5.js</li>
                <li class="specialLi">Node.js, MongoDB, Handlebars, EJS</li>
                <li class="specialLi">TensorFlow.js, Firebase</li>
              </ul>
            </b-media>
          </b-col>
        </b-row>
      </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    packages: [
      {
        name: 'Basic Static Site',
        desc: 'Usually just a few pages, to beautifully display your personal or company profile to the world.',
        image: "https://realbasics.com/wp-content/uploads/2018/02/webdesign.png"
      },
      {
        name: 'Web Application',
        desc: 'Create, update and delete data. Anything from images, videos or analytical data. An upgraded version of a static site.',
        image: "https://appdevelopermagazine.com/images/news_images/IBM-Mobile-First-App-Developer-Magazine_2zs6zt2a.jpg"
      },
      {
        name: 'API\'s',
        desc: 'Build gateways & endpoints that are architected for security and effiency.',
        image: "https://www.sendeasy.co.za/wp-content/uploads/2018/04/api-image-for-blog.png"
      }
    ]
  })
}
</script>


<style lang="scss">
.about {
  position: relative;
  min-height: 100vh;
  background-image: url("https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  background-size: cover;

  #cardHolder {
    padding-bottom: 40vh;
  }

  .bottomInfo {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    min-height: 14em;
    background: rgba(128, 0, 128, 0.8);
    .li-img {
      border-radius: 50%;
    }
    .skills {
      list-style: none;
      .specialLi {
        margin-left: -2.5em;
      }
    }
  }
  .cardAdj {
      min-height: 468.78px;
      position: relative;
      .cardBtn {
        position: absolute;
        bottom: 10px;
        left: 10px;
      }
  }
}
</style>
