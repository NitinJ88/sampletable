<template>
    <b-table
      hoverable
      :sticky-header="true"
      :data="data"  
      :columns="columns"        
    >     
        <b-table-column
          centered                       
          v-slot="props"          
        >        
          <span >{{ props.row.id}}</span>
        </b-table-column>
        <b-table-column          
          v-slot="props"                 
        > 
        <div class="users-table--b-table--email">                                
          {{ props.row.email }}   
        </div>         
        </b-table-column>                                  
    </b-table>
</template>

<script>
export default {
    name: 'UserTable',
     props:{
        
        isAdminUser: {
        type: Boolean,
        default: false
        }
     },
    data() {
        return {
           data : [
    {
        id: 1,
        email: "abc@gmail.com"
    },
     {
        id: 2,
        email: "xyz@gmail.com"
    },
    {
        id: 3,
        email: "pqr@yahoo.com"
    },               
],             
            columns: [
                    {
                        field: 'id',
                        label: 'ID',                        
                        numeric: true
                    },
                    {
                        field: 'email',
                        label: 'email',
                    }                    
            ]   
        }
    },
    computed: {
    IsAdminUser() {     
      return this.isAdminUser;
    }
  }    
};
</script>
<style lang="scss" scoped>
.users-table--b-table--remove-user {
  vertical-align: middle;
}
.users-table--b-table--email {
  display: inline-block;
  padding-left: 0.5em;
  text-overflow: ellipsis;
  max-width: 73vw;
  overflow: hidden;
  vertical-align: middle;
  padding-bottom: 0.2em;
}

</style>