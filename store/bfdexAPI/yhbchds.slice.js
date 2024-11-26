import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const api_v1_yhbchd_list = createAsyncThunk("yhbchds/api_v1_yhbchd_list", async payload => {
  const response = await apiService.api_v1_yhbchd_list(payload);
  return response.data;
});
export const api_v1_yhbchd_create = createAsyncThunk("yhbchds/api_v1_yhbchd_create", async payload => {
  const response = await apiService.api_v1_yhbchd_create(payload);
  return response.data;
});
export const api_v1_yhbchd_retrieve = createAsyncThunk("yhbchds/api_v1_yhbchd_retrieve", async payload => {
  const response = await apiService.api_v1_yhbchd_retrieve(payload);
  return response.data;
});
export const api_v1_yhbchd_update = createAsyncThunk("yhbchds/api_v1_yhbchd_update", async payload => {
  const response = await apiService.api_v1_yhbchd_update(payload);
  return response.data;
});
export const api_v1_yhbchd_partial_update = createAsyncThunk("yhbchds/api_v1_yhbchd_partial_update", async payload => {
  const response = await apiService.api_v1_yhbchd_partial_update(payload);
  return response.data;
});
export const api_v1_yhbchd_destroy = createAsyncThunk("yhbchds/api_v1_yhbchd_destroy", async payload => {
  const response = await apiService.api_v1_yhbchd_destroy(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const yhbchdsSlice = createSlice({
  name: "yhbchds",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(api_v1_yhbchd_list.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(api_v1_yhbchd_list.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload;
        state.api.loading = "idle";
      }
    }).addCase(api_v1_yhbchd_list.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }).addCase(api_v1_yhbchd_create.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(api_v1_yhbchd_create.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload);
        state.api.loading = "idle";
      }
    }).addCase(api_v1_yhbchd_create.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }).addCase(api_v1_yhbchd_retrieve.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(api_v1_yhbchd_retrieve.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [...state.entities.filter(record => record.id !== action.payload.id), action.payload];
        state.api.loading = "idle";
      }
    }).addCase(api_v1_yhbchd_retrieve.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }).addCase(api_v1_yhbchd_update.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(api_v1_yhbchd_update.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record => record.id === action.payload.id ? action.payload : record);
        state.api.loading = "idle";
      }
    }).addCase(api_v1_yhbchd_update.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }).addCase(api_v1_yhbchd_partial_update.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(api_v1_yhbchd_partial_update.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record => record.id === action.payload.id ? action.payload : record);
        state.api.loading = "idle";
      }
    }).addCase(api_v1_yhbchd_partial_update.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }).addCase(api_v1_yhbchd_destroy.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(api_v1_yhbchd_destroy.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(record => record.id !== action.meta.arg?.id);
        state.api.loading = "idle";
      }
    }).addCase(api_v1_yhbchd_destroy.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    });
  }
});
export default {
  api_v1_yhbchd_list,
  api_v1_yhbchd_create,
  api_v1_yhbchd_retrieve,
  api_v1_yhbchd_update,
  api_v1_yhbchd_partial_update,
  api_v1_yhbchd_destroy,
  slice: yhbchdsSlice
};