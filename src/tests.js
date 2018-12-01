componentDidMount() {
    const apiKey = 'KqF55UA';

    axios({
        method: 'GET',
        url: `https://strainapi.evanbusse.com/${apiKey}/strains/search/all`,
        dataResponse: 'json',
        params: {
            apiKey: apiKey,
            format: 'json'
        }
    }).then((response) => {
        response = response.data;

        const Arr = Object.entries(response);
        const filteredResults = Arr.filter((item) => {
            return item[1].race === "sativa";


        })


        console.log(filteredResults)
        // for(let item in response) {
        //   if (response[item].race === 'sativa') {
        //     // console.log(item);
        //     // console.log(response[item]);

        //     // this.setState({
        //     //   sativaStrains: {
        //     //     name: item,
        //     //     race: response[item].race,
        //     //     effects: response[item].effects
        //     //   }
        //     // })



        //   }


        // }




    })
}//end componentDidMount



for (let item in response) {
    if (response[item].race === 'sativa') {
        // console.log(item);
        // console.log(response[item]);

        const sativa = {
            name: item,
            effects: response[item].effects
        }

        const newSativaArray = this.state.sativaStrains.concat(sativa);
        this.setState({ sativaStrains: newSativaArray })

    } else if (response[item].race === 'indica') {
        const indica = {
            name: item,
            effects: response[item].effects
        }

        const newIndicaArray = this.state.indicaStrains.concat(indica);
        this.setState({ indicaStrains: newIndicaArray })

    } else {
        const hybrid = {
            name: item,
            effects: response[item].effects
        }

        const newhybridArray = this.state.indicaStrains.concat(hybrid);
        this.setState({ hybridStrains: newhybridArray })
    }
}


//   updateRecommendation = () => {
//   if (this.state.strainType === false && this.state.effectType === false) {
//     this.setState.recommendation = '';
//   } else if (this.state.strainType === true && this.state.effectType === true) {
//   console.log(this.state, 'this');
// }
//   }




{/* {
            this.state.strainType.filter(function(value){
                 return value.positive.includes(this.state.effectType);  
          })
          } */}