export const PRODUCT_QUERY=`
query{
  products{
    data{
      attributes{
        title
       Descrpition
        price
        Slug
        image{
          data{
            attributes{
              formats
            }
          }
        }
      }
    }
    
  }
  
}`