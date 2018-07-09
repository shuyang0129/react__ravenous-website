const apiKey ='l4zJw4ZYREuyUlGtcXr4Cp8rXV0vAUplbO_SW_EUyP9UBa6DiRql6IpaZiTiTqSD-MhZEfDQFuTsDvMvpoVogebjuj3EM9ZLoFZ7WnTnCrJOA3v4-pNoAxAGEOVCW3Yx';
const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by${sortBy}`, {
            header: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => response.json())
        .then(jsonResponse => {
            if(jsonResponse.business) {
                jsonResponse.business.map(business => {
                    const business = {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.category.title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    };
                });
            }
        });
    }
};

export default Yelp;