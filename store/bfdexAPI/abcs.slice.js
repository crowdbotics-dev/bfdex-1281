import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_abc_list = createAsyncThunk(
  "abcs/api_v1_abc_list",
  async payload => {
    const response = await apiService.api_v1_abc_list(payload)
    return response.data
  }
)
export const api_v1_abc_create = createAsyncThunk(
  "abcs/api_v1_abc_create",
  async payload => {
    const response = await apiService.api_v1_abc_create(payload)
    return response.data
  }
)
export const api_v1_abc_retrieve = createAsyncThunk(
  "abcs/api_v1_abc_retrieve",
  async payload => {
    const response = await apiService.api_v1_abc_retrieve(payload)
    return response.data
  }
)
export const api_v1_abc_update = createAsyncThunk(
  "abcs/api_v1_abc_update",
  async payload => {
    const response = await apiService.api_v1_abc_update(payload)
    return response.data
  }
)
export const api_v1_abc_partial_update = createAsyncThunk(
  "abcs/api_v1_abc_partial_update",
  async payload => {
    const response = await apiService.api_v1_abc_partial_update(payload)
    return response.data
  }
)
export const api_v1_abc_destroy = createAsyncThunk(
  "abcs/api_v1_abc_destroy",
  async payload => {
    const response = await apiService.api_v1_abc_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const abcsSlice = createSlice({
  name: "abcs",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_abc_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_abc_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_abc_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_abc_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_abc_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_abc_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_abc_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_abc_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_abc_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_abc_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_abc_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_abc_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_abc_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_abc_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_abc_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_abc_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_abc_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_abc_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_abc_list,
  api_v1_abc_create,
  api_v1_abc_retrieve,
  api_v1_abc_update,
  api_v1_abc_partial_update,
  api_v1_abc_destroy,
  slice: abcsSlice
}
