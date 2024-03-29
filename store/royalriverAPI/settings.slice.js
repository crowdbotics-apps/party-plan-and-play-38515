import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_settings_list = createAsyncThunk(
  "settings/api_v1_settings_list",
  async payload => {
    const response = await apiService.api_v1_settings_list(payload)
    return response.data
  }
)
export const api_v1_settings_create = createAsyncThunk(
  "settings/api_v1_settings_create",
  async payload => {
    const response = await apiService.api_v1_settings_create(payload)
    return response.data
  }
)
export const api_v1_settings_retrieve = createAsyncThunk(
  "settings/api_v1_settings_retrieve",
  async payload => {
    const response = await apiService.api_v1_settings_retrieve(payload)
    return response.data
  }
)
export const api_v1_settings_update = createAsyncThunk(
  "settings/api_v1_settings_update",
  async payload => {
    const response = await apiService.api_v1_settings_update(payload)
    return response.data
  }
)
export const api_v1_settings_partial_update = createAsyncThunk(
  "settings/api_v1_settings_partial_update",
  async payload => {
    const response = await apiService.api_v1_settings_partial_update(payload)
    return response.data
  }
)
export const api_v1_settings_destroy = createAsyncThunk(
  "settings/api_v1_settings_destroy",
  async payload => {
    const response = await apiService.api_v1_settings_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_settings_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_settings_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_settings_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_settings_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_settings_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_settings_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_settings_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_settings_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_settings_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_settings_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_settings_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_settings_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_settings_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_settings_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_settings_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_settings_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_settings_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_settings_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_settings_list,
  api_v1_settings_create,
  api_v1_settings_retrieve,
  api_v1_settings_update,
  api_v1_settings_partial_update,
  api_v1_settings_destroy,
  slice: settingsSlice
}
