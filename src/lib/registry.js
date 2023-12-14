// This file is the authoritative source for specs and documentation within the app. This can be extended in the future.

const KhronosGroup = {
  "3D_Commerce": {
    name: "3D Commerce",
    description: "Universal guidelines, standards and certifications for 3D content creation and distribution in e-commerce",
    pdf: "https://registry.khronos.org/3DCommerce/AssetCreation/specs/1.0/AssetCreationGuidelines.pdf",
    html: "",
    logo: "https://www.khronos.org/assets/css/images/api_logos/3dcommerce.svg",
  },
  ANARI: {
    name: "ANARI",
    description: "Analytic Rendering Interface for Data Visualization",
    pdf: "https://github.com/KhronosGroup/ANARI-Registry/blob/main/specs/1.0/ANARI-1.0.pdf",
    html: "",
    logo: "https://www.khronos.org/assets/css/images/api_logos/anari.svg",
  },
  COLLADA: {
    name: "COLLADA",
    description: "A file-format intended to facilitate interchange of 3D assets",
    pdf: "https://www.khronos.org/files/collada_spec_1_5.pdf",
    html: "",
    logo: "https://www.khronos.org/assets/images/api_logos/collada.svg",
  },
  EGL: {
    name: "EGL",
    description: "An interface between Khronos rendering APIs (such as OpenGL ES or OpenVG) and the underlying native platform window system",
    pdf: "https://registry.khronos.org/EGL/specs/eglspec.1.5.pdf",
    html: "",
    logo: "https://www.khronos.org/assets/images/api_logos/egl.svg",
  },
  glTF: {
    name: "glTF",
    description: "A file format specification for 3D scenes and models",
    pdf: "https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.pdf",
    html: "https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html",
    logo: "https://www.khronos.org/assets/images/api_logos/gltf.svg",
  },
  Kamaros: {
    name: "Kamaros",
    description: "An interoperable camera API standard for embedded systems, a cooperation with the European Machine Vision Association (EMVA)",
    pdf: "",
    html: "",
    logo: "https://www.khronos.org/assets/css/images/api_logos/kamaros.svg",
  },
  KTX: {
    name: "KTX",
    description: "A container file format for storing GPU-ready texture data",
    pdf: "",
    html: "https://registry.khronos.org/KTX/specs/2.0/ktxspec.v2.html",
    logo: "https://www.khronos.org/assets/images/api_logos/ktx.svg",
  },
  NNEF: {
    name: "NNEF",
    description: "Reduces machine learning deployment fragmentation by enabling a rich mix of neural network training tools and inference engines to be used by applications across a diverse range of devices and platforms",
    pdf: "https://registry.khronos.org/NNEF/specs/1.0/nnef-1.0.5.pdf",
    html: "https://registry.khronos.org/NNEF/specs/1.0/nnef-1.0.5.html",
    logo: "https://www.khronos.org/assets/images/api_logos/nnef.svg",
  },
  OpenCL: {
    name: "OpenCL",
    description: "A cross-platform computation API",
    pdf: "https://registry.khronos.org/OpenCL/specs/3.0-unified/pdf/OpenCL_API.pdf",
    html: "https://registry.khronos.org/OpenCL/specs/3.0-unified/html/OpenCL_API.html",
    logo: "https://www.khronos.org/assets/images/api_logos/opencl3.svg",
  },
  OpenGL: {
    name: "OpenGL",
    description: "A cross-platform computer graphics API",
    pdf: "https://registry.khronos.org/OpenGL/specs/gl/glspec46.core.pdf",
    html: "",
    logo: "https://www.khronos.org/assets/images/api_logos/opengl.svg",
  },
  OpenGL_ES: {
    name: "OpenGL ES",
    description: "A derivative of OpenGL for use on mobile and embedded systems, such as cell phones, portable gaming devices, and more",
    pdf: "https://registry.khronos.org/OpenGL/specs/es/3.2/es_spec_3.2.pdf",
    html: "",
    logo: "https://www.khronos.org/assets/images/api_logos/opengles.svg",
  },
  OpenGL_SC: {
    name: "OpenGL SC",
    description: "A safety critical profile of OpenGL ES designed to meet the needs of the safety-critical market",
    pdf: "https://registry.khronos.org/OpenGL/specs/sc/sc_spec_2.0.pdf",
    html: "",
    logo: "https://www.khronos.org/assets/images/api_logos/openglsc.svg",
  },
  OpenVG: {
    name: "OpenVG",
    description: "An API for accelerating processing of 2D vector graphics",
    pdf: "https://registry.khronos.org/OpenVG/specs/openvg-1.1.pdf",
    html: "",
    logo: "https://www.khronos.org/assets/images/api_logos/openvg.svg",
  },
  OpenVX: {
    name: "OpenVX",
    description: "Hardware acceleration API for Computer Vision applications and libraries",
    pdf: "https://registry.khronos.org/OpenVX/specs/1.3.1/OpenVX_Specification_1_3_1_Correction_1_changes.pdf",
    html: "https://registry.khronos.org/OpenVX/specs/1.3.1/html/OpenVX_Specification_1_3_1.html",
    logo: "https://www.khronos.org/assets/images/api_logos/openvx.svg",
  },
  OpenXR: {
    name: "OpenXR",
    description: "An open and royalty-free standard for virtual reality and augmented reality applications and devices",
    pdf: "https://registry.khronos.org/OpenXR/specs/1.0/pdf/xrspec.pdf",
    html: "https://registry.khronos.org/OpenXR/specs/1.0/html/xrspec.html",
    logo: "https://www.khronos.org/assets/images/api_logos/openxr.svg",
  },
  SPIR_V: {
    name: "SPIR-V",
    description: "SPIR-V is a binary intermediate language for representing graphical-shader stages and compute kernels for multiple Khronos APIs, including OpenCL, OpenGL, and Vulkan. SPIR-V defines a new language and is a successor to the original Khronos SPIR, which supported only OpenCL device programs.",
    pdf: "https://registry.khronos.org/SPIR-V/specs/unified1/SPIRV.pdf",
    html: "https://registry.khronos.org/SPIR-V/specs/unified1/SPIRV.html",
    logo: "https://www.khronos.org/assets/images/api_logos/spir.svg",
  },
  SYCL: {
    name: "SYCL",
    description: "A single-source C++ DSEL for heterogeneous computing",
    pdf: "https://registry.khronos.org/SYCL/specs/sycl-2020/pdf/sycl-2020.pdf",
    html: "https://registry.khronos.org/SYCL/specs/sycl-2020/html/sycl-2020.html",
    logo: "https://www.khronos.org/assets/images/api_logos/sycl.svg",
  },
  Vulkan: {
    name: "Vulkan",
    description: "A low-overhead computer graphics API",
    pdf: "https://registry.khronos.org/vulkan/specs/1.3-extensions/pdf/vkspec.pdf",
    html: "https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html",
    logo: "https://www.khronos.org/assets/images/api_logos/vulkan.svg",
  },
  Vulkan_SC: {
    name: "Vulkan SC",
    description: "Based on the existing Vulkan API specification to enable safety critical industries",
    pdf: "https://registry.khronos.org/VulkanSC/specs/1.0-extensions/pdf/vkspec.pdf",
    html: "https://registry.khronos.org/VulkanSC/specs/1.0-extensions/html/vkspec.html",
    logo: "https://www.khronos.org/assets/css/images/api_logos/vulkansc.svg",
  },
  WebGL: {
    name: "WebGL",
    description: "A JavaScript binding to OpenGL ES within a browser on any platform supporting the OpenGL or OpenGL ES graphics standards",
    pdf: "",
    html: "https://registry.khronos.org/webgl/specs/2.0.0/",
    logo: "https://www.khronos.org/assets/images/api_logos/webgl.svg",
  },
}

const Groups = {
  KhronosGroup: {
    name: "Khronos Group",
    description: "The Khronos Group, Inc. is an open, non-profit, member-driven consortium of 170 organizations developing, publishing and maintaining royalty-free interoperability standards for 3D graphics, virtual reality, augmented reality, parallel computation, vision acceleration and machine learning.",
    logo: "https://www.khronos.org/assets/images/api_logos/khronos.svg",
    internalLink: "/specifications/group?group=KhronosGroup",
    specs: KhronosGroup
  },
  W3C: {
    name: "W3C",
    description: "The World Wide Web Consortium (W3C) develops standards and guidelines to help everyone build a web based on the principles of accessibility, internationalization, privacy and security.",
    logo: "https://www.w3.org/assets/logos/w3c/w3c-no-bars.svg",
    internalLink: "/specifications/w3c"
  }
}

export const SpecificationGroups = {
  ...Groups
}