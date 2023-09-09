<template>
    <button :class="buttonClass" @click="handleClick" :disabled="disabled || loading">
      <span v-if="icon" class="prepend-icon">
        <i :class="icon"></i>
      </span>
      <span v-if="loading" class="prepend-icon">
        <i class="el-icon-loading"></i>
      </span>
      <span class="button-text">
        <slot></slot>
      </span> 
    </button>
  </template>
  
  <script>
  export default {
    name: 'HButton',
    props: {
      icon: {
        type: String,
        default: '',
      },
      loading: {
        type: Boolean,
        default: false, 
      },
      type: {
        type: String,
        default: 'default',
        validator: (value) => ['default', 'primary', 'success', 'warning', 'danger'].includes(value),
      },
      size: {
        type: String,
        default: 'large',
        validator: (value) => ['small', 'mini', 'large'].includes(value),
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      plain: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      buttonClass() {
        return [
          'my-button', 
          `my-button-${this.size}`,
          `my-button-${this.type}`,
          {
            'my-button-is-plain': this.plain,
            'my-button-disabled': this.disabled || this.loading, 
          },
        ];
      },
    },
    methods: {
      handleClick() {
        if (!this.disabled) {
          this.$emit('click');
        }
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .my-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    user-select: none;
    transition: background-color 0.3s ease;
  
  .prepend-icon {
    margin-right: 4px;
  }
  
  .append-icon {
    margin-left: 4px;
  }
  .button-text {
    display: inline-block;
  }
  }
  .my-button+.my-button {
      margin-left: 10px;
  }
  .my-button-default {
    background-color: #fff;
    border: 1px solid #DCDFE6;
    color: #333;
  }
  .my-button-default:hover,
  .my-button-default:active,
  .my-button-default.focus{
    background-color: rgba($color: #0f6aff, $alpha: 0.1);
    border: 1px solid rgba($color: #0f6aff, $alpha: 0.3);
    color: #0f6aff
  }
  .my-button-primary:hover,
  .my-button-primary:active,
  .my-button-primary.focus{
    background-color: rgba($color: #0f6aff, $alpha: 0.8);
  }
  
  .my-button-primary {
    background-color: #0f6aff;
    color: #fff;
  }
  
  .my-button-success {
    background-color: #28a745;
    color: #fff;
  }
  
  .my-button-success:hover,
  .my-button-success:active,
  .my-button-success.focus{
    background-color: rgba($color: #28a745, $alpha: 0.8);
  }
  
  .my-button-warning {
    background-color: #ffc107;
    color: #fff;
  }
  
  .my-button-warning:hover,
  .my-button-warning:active,
  .my-button-warning.focus{
    background-color: rgba($color: #ffc107, $alpha: 0.8);
  }
  .my-button-danger {
    background-color: #dc3545;
    color: #fff;
  }
  .my-button-danger:hover,
  .my-button-danger:active,
  .my-button-danger.focus{
    background-color: rgba($color: #dc3545, $alpha: 0.8);
  }
  .my-button-mini {
    padding: 4px 10px;
    font-size: 14px;
  }
  
  .my-button-small {
    padding: 6px 20px; 
    font-size: 14px;
  }
  
  .my-button-large {
    padding: 8px 20px;
    font-size: 14px;
  }
  
  .my-button-disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  .my-button-primary.my-button-is-plain {
    color: #0f6aff;
    background-color: transparent; 
    border: 1px solid #0f6aff;
  }
  .my-button-success.my-button-is-plain {
    color: #28a745;
    background-color: transparent; 
    border: 1px solid #28a745;
  }
  .my-button-warning.my-button-is-plain {
    color: #ffc107;
    background-color: transparent; 
    border: 1px solid #ffc107;
  }
  .my-button-danger.my-button-is-plain {
    color: #dc3545;
    background-color: transparent; 
    border: 1px solid #dc3545;
  }
  
  </style>