
export const OrderExamples = {
    Order : {
    description : "Gives the order details",
     value : {
        "succes": true,
        "data": {
            "customerName": "premchandu",
            "tableNumber": 20,
            "order_id": 14,
            "date": {
                "createdDate": "2023-08-24T08:24:49.956Z",
                "updatedDate": "2023-08-24T08:24:49.956Z"
            }
        }
    }
},
TableNUmberNull : {
    description : "Given Table is not entered",
     value : {
        "message": "Table number should be number"
    }
},
OrderById : {
    description : "Gives the order details",
    value : {
        "succes": true,
        "data": {
        "order_id": 11,
        "customerName": "ramanjenulu",
        "tableNumber": 0,
        "orderStatus": "completed",
        "paymentStatus": "approved",
        "orderItems": [
            {
                "orderItem_id": 17,
                "quantity": 3000,
                "menuitems": {
                    "menuitem_id": 4,
                    "menu_itemname": "Pancakes",
                    "price": 10,
                    "tax": 5
                }
            }
        ]
    }
}
},
OrderIdNotFound : {
    description : "Gives the order details",
    value :{
        "message": "Invalid id Order with given id is not available",
        "error": "Not Found",
    }
},
updatedQuantity : {
    description : "updates the menuItem and returns menuitem",
    value : {
        success: true,
       data: {
        "succes": true,
        "data": {
            "orderItem_id": 17,
            "quantity": 31,
            "menuitems": {
                "menuitem_id": 4,
                "menu_itemname": "Pancakes",
                "price": 10,
                "tax": 5
            }
        }
    }
    }
},
updateIdNotFound : {
    description : "This error occurs when name with given customername is not found",
    value : {
        "message": "Id_with_given_customerName_is_not_avalaible",
        "error": "Bad Request",
    }
},
updateMenuItemNotFound : {
    description : "This error occurs when menuItemName  is not found",
    value : {
        "message": "Invalid_Menuitem_name",
        "error": "Bad Request",
    }
},
quantityNull : {
    description : "This error occurs when quanitty is null",
    value : {
        "message": [
            "quantity should not be empty"
        ],
        "error": "Bad Request",
    }
},
menuItemnull : {
    description : "This error occurs when quanitty is null",
    value :{
        "message": [
            "menuItem should not be empty"
        ],
        "error": "Bad Request",
    }
},
AcceswithoutAuthorization:  {
    description: ' If the client attempts to access certain book-related endpoints without providing any authentication credentials',
    value: {

      message: "Authentication_is_required_to_access_the_resource."
    }
  },
  ExpiredAuthenticationToken: {
    description: 'When the client sends an authentication token that is invalid, expired, or not recognized by the server',
    value: {
      message: "client's_token_is_not_valid_for_the_requested_operation"
    }
  },
  InsufficientPrivileges : {
    description: ' If the client provides authentication credentials, but the credentials do not grant sufficient privileges to access a specific book-related operation',
    value: {

      message: "client_does_not_have_the_required_authorization_to_perform_the_requested_action."
    }
  }, RoleBasedAccessControl: {
    description: 'If the API uses role-based access control, the server may respond with a 403 status code when a user with a certain role tries to access an operation that requires a higher role or specific permissions.',
    value: {

      message: "User_with_this_role_is_not_permitted_to_access_the_resource"
    }
  } 

}