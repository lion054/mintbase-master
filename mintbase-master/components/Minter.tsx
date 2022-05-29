

import { MetadataField } from 'mintbase'
import { useLazyQuery, useQuery } from '@apollo/client';
import { gql } from 'apollo-boost';


import { useState, useEffect } from 'react'

import { useWallet } from '../context/MintbaseWalletProvider'
import { MbThingCard, MbIcon, EIconName } from 'mintbase-ui'
import { FETCH_NFT } from '../queries/example';
// import { FETCH_NFT } from "../queries/example";


function Minter() {
    const { wallet, isConnected, details } = useWallet();
    const { loading, error, data } = useQuery(FETCH_NFT);

    console.log(data);
    
    return (
        <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-4 p-10">
            {
                !loading?
                data.store.map((store) => (
                    <MbThingCard
                    
                    cardInfo={{
                        botLeftImage: store.iconBase64 ? store.iconBase64 :'https://coldcdn.com/api/cdn/bronil/JXl58b_p9iYzeFutFC5GcDCjsxppyFt5rRkQt4Su4LU',
                        botRightIcon: 'filter_none',
                        botRightText: '5/10',
                        centerElement: <img className="h-full w-full object-cover" src="./red.png" />,
                        midLeftText: store.name,
                        midRightText: store.owner,
                        nftTypeIcon: 'image',
                        onBotLeftImageClick: function noRefCheck() { },
                        onCenterElementClick: function noRefCheck() { },
                        onUpperLeftClick: function noRefCheck() { },
                        onUpperRightClick: function noRefCheck() { },
                        upperLeftText: '1',
                        loading :loading,
                        upperRightElement: <MbIcon name={EIconName.MORE} color={""} />
                    }}
                />
                )) : <h2>Loading...</h2>
            }
           
        </div>
    )
}

export default Minter