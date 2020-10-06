### how to use command

__first you have to store initial balence of both account in the record file.
then you can run command for this transaction.__


```js

node [Saving | Checking] [Debit | Credit] [amount] 

```


 Here we will use record.json use as database so we do not have to use any database , but in real application we will use mongodb database and user will not able to change their intial amount directly there will be some king of authentication.but right now first you have to set intial balence in that file and after that you can do transaction on the any account and all the transection log will be saved in that file.
