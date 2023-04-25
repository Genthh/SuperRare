import React from "react";
import './LandingPage.css'
import Header from "./Header/Header";

const nfts = [
  {
    name: "Artwork Name 1",
    description: "Description of the artwork 1.",
    creator: "Artist Name 1",
    collection: "Collection Name 1",
    tokenId: "1234567890",
    Image: "https://i.seadn.io/gae/lF6I9KO1Bl_UNDSKRwXP3l_w8gDDLvCnXoyZZ9QFH3uJ0Llx1GXsw2bIa-fI_DrAGpffSmC8ZWSZss-a0m2dWEgxQFh_Bn-n9Rdm?auto=format&w=1000"
  },
  {
    name: "Artwork Name 2",
    description: "Description of the artwork 2.",
    creator: "Artist Name 2",
    collection: "Collection Name 2",
    tokenId: "2345678901",
 Image: "https://i.seadn.io/gae/OeDIqOz_c6iWq_1QqUy-R1xsxCx5R_xQo3v9R2NtZrg2aFczmVJ_UbUfVSPnlk8FXTH9sbsLGPqc5o7El5y1od0sjf8z4Tf1P21rEQ?auto=format&w=1000"  },
  {
    name: "Artwork Name 3",
    description: "Description of the artwork 3.",
    creator: "Artist Name 3",
    collection: "Collection Name 3",
    tokenId: "3456789012",
    Image: "https://i.seadn.io/gae/C6E6ri2WO-0T08Lva5anOdv-DOVnk5Se76TT77NptS45OptZXY8aEThTAS0xbS_1_jFUMk-O4w0DHa2pfLLjElj3gyxkcuwNutcylQ?auto=format&w=1920"
  },
  {
    name: "Artwork Name 1",
    description: "Description of the artwork 1.",
    creator: "Artist Name 1",
    collection: "Collection Name 1",
    tokenId: "1234567890",
    Image: "https://i.seadn.io/gae/lF6I9KO1Bl_UNDSKRwXP3l_w8gDDLvCnXoyZZ9QFH3uJ0Llx1GXsw2bIa-fI_DrAGpffSmC8ZWSZss-a0m2dWEgxQFh_Bn-n9Rdm?auto=format&w=1000"
  },
  {
    name: "Artwork Name 2",
    description: "Description of the artwork 2.",
    creator: "Artist Name 2",
    collection: "Collection Name 2",
    tokenId: "2345678901",
 Image: "https://i.seadn.io/gae/OeDIqOz_c6iWq_1QqUy-R1xsxCx5R_xQo3v9R2NtZrg2aFczmVJ_UbUfVSPnlk8FXTH9sbsLGPqc5o7El5y1od0sjf8z4Tf1P21rEQ?auto=format&w=1000"  },
  {
    name: "Artwork Name 3",
    description: "Description of the artwork 3.",
    creator: "Artist Name 3",
    collection: "Collection Name 3",
    tokenId: "3456789012",
    Image: "https://i.seadn.io/gae/C6E6ri2WO-0T08Lva5anOdv-DOVnk5Se76TT77NptS45OptZXY8aEThTAS0xbS_1_jFUMk-O4w0DHa2pfLLjElj3gyxkcuwNutcylQ?auto=format&w=1920"
  }
];

const NftSection = () => {
  return (
    <div>
      <Header/>
      {nfts.map((nft, index) => (
        <div key={index} className="nft">
          <div className="row">
            <div className="col-md-6">
            </div>
            <div className="col-md-6">
              <div >
                <img src={nft.Image} alt="" />
              </div>
               
              <h3 className="mb-4">{nft.name}</h3>
              <p className="mb-4">{nft.description}</p>
              <ul className="list-unstyled mb-4">
               
                <li>
                  Creator: <span className="fw-bold">{nft.creator}</span>
                </li>
                <li>
                  Collection: <span className="fw-bold">{nft.collection}</span>
                </li>
                <li>
                  Token ID: <span className="fw-bold">{nft.tokenId}</span>
                </li>
              </ul>
              <button className="btn btn-primary">Purchase</button>
            </div>
            <div>
              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};


export default NftSection;
