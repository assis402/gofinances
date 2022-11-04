import AppLoading from "expo-app-loading";
import React from "react";
import { FlatList, Modal } from "react-native";
import { Button } from "../../components/Forms/Button";
import { categories } from "../../utils/categories";
import { Category, Container, ExternalModal, Footer, Icon, InternalModal, Name, Separator, Title } from "./styles";

interface Category {
    key: string;
    name: string;
}

interface Props {
    category: Category;
    setCategory: (category: Category) => void;
    closeSelectCategory: () => void;
    categoryModalIsOpen: boolean;
}

export function CategorySelectModal({
    category,
    setCategory,
    closeSelectCategory,
    categoryModalIsOpen
} : Props){

    function handleCategorySelect(category: Category){
        setCategory(category);
    }

    return(
        <Container>
            <Modal
                visible={categoryModalIsOpen}
                transparent={true}
                animationType='fade'
                statusBarTranslucent
            >
                <ExternalModal>
                    <InternalModal>
                        <FlatList
                            data={categories}
                            style={{ flex: 1, width: '100%' }}
                            keyExtractor={(item) => item.key}
                            renderItem={({ item }) => (
                                <Category
                                    onPress={() => handleCategorySelect(item)}
                                    isActive={category.key === item.key}
                                >
                                    <Icon name={item.icon} isActive={category.key === item.key}/>
                                    <Name isActive={category.key === item.key}>{item.name}</Name>
                                </Category>
                            )}
                            ItemSeparatorComponent={() => <Separator/>}
                        />
                        <Footer>
                            <Button 
                                title="Selecionar"
                                onPress={closeSelectCategory}
                            />
                        </Footer>
                    </InternalModal>
                </ExternalModal>
            </Modal>
        </Container>
    )
}