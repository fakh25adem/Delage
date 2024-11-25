import React from 'react';
import image from '../../images/about.jpg'
import imageAdjointe from '../../images/ReactNew/Chassi_maxillaure_metallique.jpeg'
import imageConjointe from '../../images/ReactNew/Screenshot_20241010_202137_Photos.jpg'
import imageDentaire from '../../images/ReactNew/Appareil_dentaire_2.jpg'



const BlogList = (props) => {
    return (
             <section >
           
               
           <div className="row mb-5">
           <div className='col-lg-4 col-md-6 col-sm-12'>
              
                  
              <center><h2  style={{ fontSize: '40px', color: '#000b47' }} >Prothèses
              conjointes</h2></center>
              <div className="img-holder">
                  <img className='ImagePrduitAdjointe' src={imageConjointe}alt="" />
              </div>
              <br></br>
              <p style={{ textAlign: "justify",color:'#154968' }}>Les prothèses conjointes sont des dispositifs dentaires fixés de manière permanente sur les dents ou les implants. Elles incluent les couronnes, les ponts et les inlays/onlays, qui restaurent la fonction et l'esthétique d'une dent abîmée ou manquante. Contrairement aux prothèses amovibles, les prothèses conjointes offrent une solution durable, confortable et naturelle, améliorant la mastication et le sourire du patient. Elles sont fabriquées sur mesure pour s'adapter parfaitement à la dentition, contribuant ainsi à la longévité de la dent ou de l'implant sur lequel elles sont fixées.</p>
            
          </div>
                 <div className='col-lg-4 col-md-6 col-sm-12'>
              
                  
                    <center><h2  style={{ fontSize: '40px', color: '#000b47' }} >Prothèses
                    adjointes</h2></center>
                    <div className="img-holder">
                        <img className='ImagePrduitAdjointe' src={imageAdjointe}alt="" />
                    </div>
                    <br></br>
                    <p style={{ textAlign: "justify",color:'#154968' }}>Les prothèses adjointes sont des dispositifs dentaires amovibles, comme les dentiers complets ou partiels, conçus pour remplacer plusieurs dents manquantes. Elles s'appuient sur les gencives ou les dents restantes et peuvent être retirées pour le nettoyage. Fabriquées sur mesure, ces prothèses restaurent la fonction masticatoire et l'esthétique du sourire, offrant une solution pratique et confortable pour remplacer des dents manquantes.</p>
                  
                </div>
          
          <div className='col-lg-4 col-md-6 col-sm-12'>
              
                  
              <center><h2  style={{ fontSize: '40px', color: '#000b47' }} >Appareils
              orthodontiques</h2></center>
              <div className="img-holder">
                  <img className='ImagePrduitAdjointe' src={imageDentaire}alt="" />
              </div>
              <br></br>
              <p style={{ textAlign: "justify",color:'#154968' }}>Les appareils orthodontiques sont des dispositifs utilisés pour corriger l'alignement des dents et des mâchoires. Ils comprennent les bagues, les aligneurs transparents et les appareils amovibles, qui déplacent progressivement les dents vers leur position idéale.  En plus d'améliorer l'esthétique du sourire, ces appareils contribuent à une meilleure fonction masticatoire et à la santé bucco-dentaire. Conçus sur mesure pour chaque patient, ils offrent une solution efficace pour corriger les chevauchements, les espacements et les malocclusions.</p>
            
          </div>
                
             
            </div>
           
            
      
   </section>
               
           

    )

}

export default BlogList;
