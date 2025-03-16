import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";
import { getProducts, deleteProduct } from "../services/productService";
import ProductCard from "../product_card";
import Header from "@/components/ui/Header";
import ProductList from "@/components/ui/ProductList";
import { useRouter } from "expo-router";


export default function TabTwoScreen() {
  const router = useRouter(); 
  return <ProductList router={router} />;
}