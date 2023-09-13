
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
 



export const getLoginThunk = createAsyncThunk(
    'getLoginThunk',
    async (params) => {
      const res = await axios.get("http://ankursingh.xyz/api/Employeelogin.php",params);

      return res.data;
    },
  );