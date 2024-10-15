<template>
<section id="Profile" class="gradient-background">
    <div class="container col-xxl-8 px-5 py-5 rounded-3 wow fadeInUp section-title animated">
        <div class="row flex-lg-row-reverse align-items-center g-2 py-2">
          <div class="col-6 col-sm-2 col-lg-4">
            <img src="images/profile.jpg" class="profile-img">
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3">KHIEV SOTHY</h1>
            <h1 class="lead">Always stay curious and continuously learn 
              new skills, whether through formal education, online courses, or self-study.</h1>
          </div>
        </div>
      </div>
    </section>
    <section class="py-5 text-center container">
          <div class="row py-lg-5">
            <div class="col-lg-6 col-md-8 mx-auto">
              <h1 class="fw-light">Hi!</h1>
              <p class="lead text-muted">I'm Sothy, an IT student at CADT. To respond what have mentioned above, below are the pros and cons:</p>
             </div>
          </div>
         
            <!-- START THE FEATURETTES -->
        
            <hr class="featurette-divider">
        
            <div class="row featurette">
              <div class="col-md-7">
                <h2 class="featurette-heading">WHY?</h2>
                <p class="lead">Being in the right way on what you are an expert on will lead you to succeed in working life. 
                  I know, there will be many difficult sectors you will face during your journey starting from your University 
                  life and after you graduate. However,  some are faced with economic crises that cause them to work apart from 
                  their own skill. In the long term, there will be complexity and wrong in their direction when their background
                   do not really match they will not be able to apply for higher positions. 
                </p>
              </div>
              <div class="col-md-5">
                <img src="images/choosing-way.jpg" width="100%">                
              </div>
            </div>
        
            <hr class="featurette-divider">
        
            <div class="row featurette">
              <div class="col-md-7 order-md-2">
                <h2 class="featurette-heading">HOW?</h2>
                <p class="lead">If you are not facing the issue mentioned above, below is what you should do:
•  Stay Curious and Keep Learning: The IT field evolves quickly. Always stay curious and continuously learn new skills, whether through formal education, online courses, or self-study.
•  Practical Experience Matters: Seek internships, projects, and hands-on experiences early on. This helps you understand real-world applications and keeps engaged with the field.
•  Network and Find Mentors: Building a strong network can open doors and provide support throughout their career. Find mentors and learn from others' experiences.
•  Diversify Skills: Technology intersects with many fields. Learning complementary skills, like data science, project management, or even creative skills, can help you stay versatile and competitive.
•  Embrace Change: The tech field is known for rapid change. To be flexible, embrace new technologies, and adapt to new challenges rather than fearing them.
</p>
              </div>
              <div class="col-md-5 order-md-1">
                <img src="images/groupwork.jpg" width="100%">
              </div>
            </div>
            <!-- /END THE FEATURETTES -->
        
          

        </section>
</template>
<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>