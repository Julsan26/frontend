export const PRODUCT_QUERY=`# Write your query or mutation here
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