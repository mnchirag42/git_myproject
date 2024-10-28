import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./MaterialDetail.css"
import myimg from "./images/Screenshot1.png"
import myimg1 from "./images/Screenshot2.png"
import myimg2 from "./images/Screenshot3.png"
import myimg3 from "./images/Screenshot4.png"
import myimg4 from "./images/Screenshot5.png"
import myimg5 from "./images/Screenshot6.png"

const materialDetails = {
  1: (
    <div>
      <img src={myimg} alt="log"/>
      <h2><b>"Immunity Booster"</b></h2>
      <h3>Primary Raw Materials:</h3>
      <ul>
        <li><strong>Amla (Indian Gooseberry):</strong> High in vitamin C, boosts immunity.</li>
        <li><strong>Tulsi (Holy Basil):</strong> Known for its antimicrobial and antiviral properties.</li>
        <li><strong>Giloy (Tinospora cordifolia):</strong> Immune-modulating and anti-inflammatory effects.</li>
        <li><strong>Ashwagandha:</strong> Adaptogen that helps in stress management, indirectly supporting immunity.</li>
        <li><strong>Turmeric:</strong> Contains curcumin with anti-inflammatory and antioxidant properties.</li>
      </ul>
      <h3>Additional Ingredients:</h3>
      <ul>
        <li><strong>Ginger:</strong> Boosts immunity, anti-inflammatory.</li>
        <li><strong>Moringa:</strong> Rich in vitamins and minerals.</li>
        <li><strong>Neem:</strong> Detoxifying properties.</li>
        <li><strong>Cumin Seeds:</strong> Supports digestion and boosts immunity.</li>
        <li><strong>Black Pepper:</strong> Enhances nutrient bioavailability.</li>
        <li><strong>Cardamom:</strong> Enhances the body's ability to fight infections.</li>
        <li><strong>Cinnamon:</strong> Antiviral, antibacterial, and antifungal properties.</li>
      </ul>
      <h3>Packaging Materials:</h3>
      <ul>
        <li><strong>Bottle:</strong> Likely made of PET (Polyethylene Terephthalate) plastic, a common material for food and beverage containers.</li>
        <li><strong>Cap:</strong> Usually made of plastic, with an inner seal for airtight packaging.</li>
        <li><strong>Label:</strong> Could be a plastic or paper-based label, printed with product information, branding, and usage instructions.</li>
        <li><strong>Shrink Wrap (optional):</strong> Often used for tamper evidence or to group multiple bottles together.</li>
      </ul>
    </div>
  ),
  2: (
    <div>
      <img src={myimg1} alt="log"/>
      <h2><b>"Jeera Plus Extract"</b></h2>
      <h3>Primary Raw Materials:</h3>
      <ul>
        <li><strong>Cumin (Jeera) Seeds:</strong> Provides distinct flavor and health benefits, particularly for digestion.</li>
        <li><strong>Water:</strong> Acts as the base solvent for extracting active components from cumin seeds.</li>
        <li><strong>Ethanol (optional):</strong> Used as a solvent in extraction for potency, later evaporated out.</li>
      </ul>
      <h3>Additional Ingredients:</h3>
      <ul>
        <li><strong>Acidulants (Citric Acid):</strong> Adjusts pH, enhances flavor, improves stability.</li>
        <li><strong>Preservatives (Sodium Benzoate, Potassium Sorbate):</strong> Prevents microbial growth, extends shelf life.</li>
        <li><strong>Stabilizers and Emulsifiers (Xanthan Gum, Lecithin):</strong> Maintains consistency, prevents separation.</li>
        <li><strong>Sweeteners (Stevia, Sucralose):</strong> Balances taste, especially if bitter.</li>
        <li><strong>Flavor Enhancers (optional):</strong> Boosts cumin flavor or adds complementary notes like lemon or mint.</li>
        <li><strong>Colorants (optional, Caramel Color):</strong> Provides consistent, appealing color.</li>
        <li><strong>Antioxidants (Ascorbic Acid, Tocopherols):</strong> Prevents oxidation, maintains potency.</li>
      </ul>
      <h3>Packaging Materials:</h3>
      <ul>
        <li><strong>Bottle:</strong> BPA-free plastic or glass, depending on brand positioning.</li>
        <li><strong>Cap and Seal:</strong> Plastic or metal cap with tamper-evident seal to prevent contamination or leakage.</li>
      </ul>
    </div>
  ),
  3: (
    <div>
      <img src={myimg2} alt="log"/>
      <h2><b>"Urinary System Booster"</b></h2>
      <h3>Primary Raw Materials:</h3>
      <ul>
        <li><strong>Cranberry Extract:</strong> Known for supporting urinary health.</li>
        <li><strong>Dandelion Root:</strong> Commonly used for its diuretic properties.</li>
        <li><strong>Uva Ursi (Bearberry):</strong> Herbal support for urinary tract health.</li>
        <li><strong>Marshmallow Root:</strong> Traditionally used to soothe the urinary tract.</li>
        <li><strong>Horsetail:</strong> Supports urinary and kidney health.</li>
        <li><strong>Corn Silk:</strong> Helps in urinary tract health management.</li>
        <li><strong>Parsley:</strong> A natural diuretic supporting kidney function.</li>
      </ul>
      <h3>Additional Ingredients:</h3>
      <ul>
        <li><strong>Water:</strong> Used as a solvent in the herbal extract.</li>
        <li><strong>Preservatives:</strong> To maintain shelf life.</li>
        <li><strong>Flavorings or Sweeteners:</strong> To make the extract more palatable.</li>
        <li><strong>Stabilizers or Emulsifiers:</strong> To ensure consistency of the solution.</li>
      </ul>
      <h3>Packaging Materials:</h3>
      <ul>
        <li><strong>Plastic Bottle:</strong> Likely made of PET or HDPE, commonly used for liquid products.</li>
        <li><strong>Plastic Cap:</strong> Used to seal the bottle securely.</li>
        <li><strong>Label:</strong> Printed paper or plastic label wrapped around the bottle.</li>
      </ul>
    </div>
  ),
  4: (
    <div>
      <img src={myimg3} alt="log"/>
      <h2><b>"Lemongrass Herbal Bathing Bar"</b></h2>
      <h3>Primary Raw Materials:</h3>
      <ul>
        <li><strong> Lemongrass Essential Oil:</strong> Provides a refreshing scent and has antimicrobial properties.</li>
        <li><strong>Turmeric Oil:</strong>Known for its anti-inflammatory and antioxidant benefits.</li>
        <li><strong>Aloe Vera:</strong> Soothes and moisturizes the skin.</li>
       </ul>
      
      <h3>Additional Ingredients:</h3>
      <ul>
        <li><strong>Soap Base:</strong> Likely made from a combination of natural oils (e.g., coconut oil, palm oil, or olive oil) and lye (sodium hydroxide).</li>
        <li><strong>Glycerin:</strong>A natural humectant that helps to moisturize the skin.</li>
        <li><strong>Natural Colorants:</strong> To give the soap its color, possibly derived from turmeric or other natural sources.</li>
        <li><strong>Essential Oils:</strong> Other essential oils may be included for additional fragrance or skin benefits.</li>
        </ul>

      <h3>Packaging Materials:</h3>
      <ul>
        <li><strong>Soap Wrapper:</strong> Typically made of paper or a combination of paper and plastic, designed to protect the bar and display branding.</li>
        <li><strong>Box:</strong>The outer packaging is often made of cardboard or recycled paper, printed with product information and branding.</li>
      </ul>
      </div>
  ),
  5: (
    <div>
      <img src={myimg4} alt="log"/>
      <h2><b>"Kashaya Herbal Bathing Bar"</b></h2>
      <h3>Primary Raw Materials:</h3>
      <ul>
        <li><strong>Kashaya of Various Herbs:</strong> A decoction made from a blend of herbs, which may include ingredients like neem, tulsi, turmeric, and other Ayurvedic herbs known for their skin benefits.</li>
        <li><strong>Manjistha Powder:</strong> A herb known for its ability to purify the blood and promote healthy skin, often used in Ayurvedic formulations.</li>
      </ul>
      
      <h3>Additional Ingredients:</h3>
      <ul>
        <li><strong>Soap Base:</strong> Typically made from natural oils (such as coconut oil, palm oil, or olive oil) combined with lye (sodium hydroxide) to create the soap.</li>
        <li><strong>Glycerin:</strong> A moisturizing agent that helps to keep the skin hydrated.</li>
        <li><strong>Natural Colorants:</strong> These could be derived from herbs like turmeric or manjistha itself to give the soap its color.</li>
        <li><strong>Essential Oils:</strong> For fragrance and additional skin benefits, essential oils like sandalwood, rose, or lavender may be added.</li>
        </ul>
        
      <h3>Packaging Materials:</h3>
      <ul>
        <li><strong>Soap Wrapper:</strong>Usually made from paper or a paper-plastic blend to protect the soap and carry branding.</li>
        <li><strong>Box:</strong>The outer packaging is often made of cardboard or recycled paper, featuring printed branding, product information, and ingredients</li>
      </ul>
      </div>
  ),
  6: (
    <div>
      <img src={myimg5} alt="log"/>
      <h2><b>"Cocoreca Herbal Bathing Bar"</b></h2>
      <h3>Primary Raw Materials:</h3>
      <ul>
        <li><strong>Areca Fruit:</strong> Likely used for its astringent and skin-tightening properties.</li>
        <li><strong>Coconut Oil:</strong> Known for its moisturizing, antibacterial, and nourishing qualities for the skin.</li>
        <li><strong>Teak Extract:</strong> Teak is often used for its antioxidant properties, helping to protect the skin from damage.</li>
      </ul>
      
      <h3>Additional Ingredients:</h3>
      <ul>
        <li><strong>Soap Base:</strong> Made from natural oils like coconut oil, palm oil, or olive oil, combined with lye (sodium hydroxide) to form the soap.</li>
        <li><strong>Glycerin:</strong> A natural humectant that helps in retaining moisture in the skin.</li>
        <li><strong>Essential Oils:</strong> For fragrance and added skin benefits, other essential oils might be included.</li>
        <li><strong>Natural Colorants:</strong> Derived from botanical sources or herbs to give the soap its color.</li>
        </ul>
        
      <h3>Packaging Materials:</h3>
      <ul>
        <li><strong>Soap Wrapper:</strong> Usually made from paper or a paper-plastic blend, designed to protect the soap and display branding.</li>
        <li><strong>Box:</strong> The outer packaging is typically made of cardboard or recycled paper, printed with branding, product details, and ingredient information.</li>
      </ul>
      </div>
  ),
};

const MaterialDetail = () => {
  const { materialId } = useParams();
  const navigate = useNavigate();
  
  const materialInfo = materialDetails[materialId];

  return (
    <div className="material-detail-container">
      <center>
        <h2><u>Material Details</u></h2>
        {materialInfo ? materialInfo : <p>Material not found. Please check the link and try again.</p>}
        <button className="back-button" onClick={() => navigate(-1)}>Back</button>
      </center>
    </div>
  );
};

export default MaterialDetail;
